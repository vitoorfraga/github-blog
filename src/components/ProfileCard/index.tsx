import { Avatar, ProfileCardContainer, Socials, UserDetails } from './styles'
import arrowIcon from './../../assets/icons/linkArrow.svg'
import gitIcon from './../../assets/icons/gitIcon.svg'
import companyIcon from './../../assets/icons/companyIcon.svg'
import followersIcon from './../../assets/icons/followersIcon.svg'
import { userAPI } from '../../lib/axios'
import { useEffect, useState } from 'react'
import SkeletonLoading from '../SkeletonLoading'

export interface User {
  name: string
  followers: number
  githubUsername: string
  company: string
  html_url: string
  avatar_url: string
  bio: string
}

export function ProfileCard() {
  const [userData, setUserData] = useState<User>()
  const [isLoading, setIsLoading] = useState(true)

  async function fetchProfile() {
    const response = await userAPI.get('/vitoorfraga')
    setUserData(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileCardContainer>
      {isLoading ? (
        <SkeletonLoading height={20} lines={4} spacings={10} />
      ) : (
        <>
          <Avatar src={userData?.avatar_url} width={24} />
          <UserDetails>
            <header>
              <h2>{userData?.name}</h2>
              <a href={userData?.html_url} target="_blank" rel="noreferrer">
                GITHUB
                <img src={arrowIcon} alt="" />
              </a>
            </header>

            <p>{userData?.bio}</p>

            <Socials>
              <a href="">
                <img src={gitIcon} alt="Perfil completo dentro do github" />
                vitoorfrag
              </a>

              <a href="">
                <img src={companyIcon} alt="Perfil completo dentro do github" />
                Power2Go
              </a>
              <a href="">
                <img
                  src={followersIcon}
                  alt="Perfil completo dentro do github"
                />
                {userData?.followers} Seguidores
              </a>
            </Socials>
          </UserDetails>
        </>
      )}
    </ProfileCardContainer>
  )
}
