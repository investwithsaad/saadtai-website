/**
 * SAAD TAI - CLIENT TESTIMONIALS
 *
 * Real client testimonials and success stories from investwithsaad.com
 */

export interface FundingCase {
  id: string
  clientName: string
  title: string
  scenario: string
  testimonial: string
  results: string[]
  image?: string
}

export const fundingCases: FundingCase[] = [
  {
    id: "musa-naji",
    clientName: "Musa Naji",
    title: "Homeowner - Successful Sale",
    scenario: "Home Sale",
    testimonial: "Saad is the best real estate agent that I ever had. He is very pleasant, very responsive, very reliable, very knowledgeable, and makes things so much easier and will not give up no matter what the circumstance is. The best feature I liked about him is that he makes you feel very comfortable and makes things so much easy. I was able to text and call him at anytime and he is always fast at responding. God bless you Saad. I am looking forward to do more and more business with him.",
    results: ["Smooth transaction", "Quick responses", "High satisfaction"],
    image: "/testimonials/musa.jpg"
  },

  {
    id: "michael-downton",
    clientName: "Michael Downton",
    title: "Client",
    scenario: "Home Purchase & Selling",
    testimonial: "What makes Saad such an amazing person is his ability to listen and make you feel like you're the most important person in the room. It's not what he says, but more about his follow through that lets you know he heard every word. If you are working with him you have made a wonderful choice.",
    results: ["Exceptional listening", "Reliable follow-through", "Personalized service"],
    image: "/testimonials/michael.jpg"
  },

  {
    id: "nicholas-totaram",
    clientName: "Nicholas Totaram",
    title: "Buyer & Investor",
    scenario: "Investment Property Purchase",
    testimonial: "I had an excellent experience working with Saad Tai as my real estate agent. From start to finish, he was professional, knowledgeable, and always available to answer my questions. He made the entire buying/selling process smooth and stress-free with his expertise and dedication. If you're looking for a reliable and hardworking agent who truly cares about his clients, I highly recommend Saad Tai!",
    results: ["Stress-free process", "Professional guidance", "Expert knowledge"],
    image: "/testimonials/nicholas.jpg"
  },

  {
    id: "jeremy-davis",
    clientName: "Jeremy Davis",
    title: "Real Estate Investor",
    scenario: "Multiple Property Investments",
    testimonial: "I've worked with Saad for almost 2 years now. He's one of the most professionally realtors out there. He's also very hard working and creative. Most realtors sit back and wait for deals to come or wait for their listings to sell. In my experience, Saad hasn't been that way. He's a hunter. And to me, that's hard to find. Highly recommend using Saad as your realtor.",
    results: ["Proactive approach", "Multiple successful deals", "Long-term partnership"],
    image: "/testimonials/jeremy.jpg"
  },

  {
    id: "emilio-fonseca",
    clientName: "Emilio Fonseca",
    title: "Client - Investor/Developer",
    scenario: "Multiple Property Transactions",
    testimonial: "Saad is a fantastic agent to work with! Always has a positive attitude and one of the hardest working Agents I know. If I'm investing in New York, I'm calling Saad!",
    results: ["Positive attitude", "Hard working", "Investment expertise"],
    image: "/testimonials/emilio.jpg"
  },

  {
    id: "christine-degennaro",
    clientName: "Christine DeGennaro",
    title: "First-Time Home Seller",
    scenario: "First Home Sale",
    testimonial: "As a first time home seller, I was pretty clueless and nervous about the whole process! Saad explained everything and was very patient and always quick to respond to any of my questions (and I had ALOT of questions!)... Great realtor and a great guy!!!",
    results: ["Patient guidance", "Responsive communication", "Successful first sale"],
    image: "/testimonials/christine.jpg"
  }
]

export default fundingCases
