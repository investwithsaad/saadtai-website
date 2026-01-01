'use client'

import { useRef, useState, useCallback } from 'react'
import { useJsApiLoader, StandaloneSearchBox } from '@react-google-maps/api'

interface PlacesAutocompleteProps {
  onPlaceSelected: (place: {
    address: string
    city: string
    state: string
    zip: string
  }) => void
}

const libraries: "places"[] = ['places']

export function PlacesAutocomplete({ onPlaceSelected }: PlacesAutocompleteProps) {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null)
  const [query, setQuery] = useState('')
  const [error, setError] = useState<string>('')

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: libraries,
  })

  const parseAddressFromPlace = (place: google.maps.places.PlaceResult) => {
    let address = ''
    let city = ''
    let state = ''
    let zip = ''

    if (place.address_components) {
      place.address_components.forEach((component) => {
        const componentType = component.types[0]
        if (componentType === 'street_number') address = component.short_name + ' ' + address
        if (componentType === 'route') address += component.short_name
        if (componentType === 'locality') city = component.short_name
        if (componentType === 'administrative_area_level_1') state = component.short_name
        if (componentType === 'postal_code') zip = component.short_name
      })
    }

    if (!address) {
      address = place.formatted_address?.split(',')[0] || ''
    }

    return {
      address: address.trim(),
      city: city || place.formatted_address?.split(',')[1]?.trim() || '',
      state: state || place.formatted_address?.split(',')[2]?.trim().split(' ')[0] || '',
      zip: zip || place.formatted_address?.split(' ').pop() || '',
    }
  }

  const getPlaceDetailsIfNeeded = async (place: google.maps.places.PlaceResult) => {
    if (place.address_components || !place.place_id) return place

    return await new Promise<google.maps.places.PlaceResult>((resolve) => {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'))
      service.getDetails(
        {
          placeId: place.place_id!,
          fields: ['address_components', 'formatted_address', 'geometry', 'name', 'place_id'],
        },
        (details) => resolve(details || place)
      )
    })
  }

  const handlePlacesChanged = useCallback(async () => {
    const places = searchBoxRef.current?.getPlaces() || []
    if (!places.length) return

    const basePlace = places[0]
    const place = await getPlaceDetailsIfNeeded(basePlace)

    if (!place.formatted_address) {
      setError('Please select a valid address from the dropdown')
      return
    }

    const parsed = parseAddressFromPlace(place)

    onPlaceSelected(parsed)
    setError('')
    setQuery('')
  }, [onPlaceSelected])

  if (!isLoaded) {
    return (
      <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-500">
        Loading location search...
      </div>
    )
  }

  return (
    <div className="w-full">
      <StandaloneSearchBox
        onLoad={(ref) => {
          searchBoxRef.current = ref
        }}
        onPlacesChanged={handlePlacesChanged}
      >
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Enter your address..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </StandaloneSearchBox>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  )
}
