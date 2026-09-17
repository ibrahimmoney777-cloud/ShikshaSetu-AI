export interface TeamMember {
  name: string
  department: string
  role: string
  email: string
  phone?: string
  image: string
  isLeader?: boolean
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Krithika S',
    department: 'CSE (RL)',
    role: 'Team Member',
    email: 'krithikasaravanakumar2@gmail.com',
    image: '/team/krithika.jpg',
  },
  {
    name: 'Bhavika K1',
    department: 'CSE (RL)',
    role: 'Team Member',
    email: 'bhavikabhavika7899gmail.com',
    image: '/team/bhavika.jpg',
  },
  {
    name: 'IBRAHIM ABDELMAGID',
    department: 'Cyber Security',
    role: 'Team Member',
    email: 'ibraa7x@gmail.com',
    phone: '9884368894',
    image: '/team/ibrahim.jpg',
  },
  {
    name: 'Saugat Yadav',
    department: 'B.E. CSE',
    role: 'Team Member',
    email: 'saugatyadav73@gmail.com',
    phone: '7295029921',
    image: '/team/saugat.jpg',
  },
  {
    name: 'Aadarsh Kumar Chaudhary',
    department: 'B.E. CSE (AIML)',
    role: 'Team Leader',
    email: 'aadarshc967@gmail.com',
    phone: '8127850177',
    image: '/team/aadarsh.jpg',
    isLeader: true,
  },
  {
    name: 'Mahesh Rana',
    department: 'B.E. CSE',
    role: 'Team Member',
    email: 'maheshofficial00110@gmail.com',
    phone: '8838629234',
    image: '/team/mahesh.jpg',
  },
]
