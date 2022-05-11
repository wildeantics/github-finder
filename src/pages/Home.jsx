import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
import { FaGithub } from 'react-icons/fa'

function Home() {
  return (
    <>
      <h1 className='text-6xl card-title mb-6 text-white'>
        <FaGithub />
        Github Finder
      </h1>
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home
