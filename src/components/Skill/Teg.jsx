
import './Skill.css'
import { FrondArray } from './Skill'

function Teg() {
  return (
    <div className="content">
      <div className='teg'>
      {
        FrondArray.length ? FrondArray.map(item => (
            <span key={item.name} className='sp'>
                <img src={item.logo} alt="" />
            </span>
        )) : null
      }
      </div>
    </div>
  )
}

export default Teg
