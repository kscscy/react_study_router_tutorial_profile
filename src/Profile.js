import React from 'react'
import WithRouterSample from './WithRouterSample'

const data = {
  test: {
    name: 'name1',
    description: '리액트를 공부하자'
  },
  test2: {
    name:'name2',
    description: '리액트를 공부하세요'
  }
}

const Profile = ({match}) => {
  /**
   * URL 파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아 오는 match라는 객체 안의 params 값을 참조합니다. 
   * match 객체 안에는 현재 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보가 들어 있습니다.
   */
  const {username} = match.params
  const profile = data[username]
  if (!profile){
    return <div>존재하지 않는 사용자입니다.</div>
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  )
}

export default Profile
