import Deals from '../../components/Deals/Deals'
import Find from '../../components/Find/Find'
import Trend from '../../components/Trend/Trend'
import Works from '../../components/Works/Works'
import './Content.css'

const Content = () => {

  const photos = [
    'images/prop1.png',
    'images/prop2.png',
    'images/prop3.png',
    'images/prop4.png',
    'images/prop5.png',
    'images/prop6.png'
  ]
  const deals = [
    'images/deal1.jpg',
    'images/deal2.jpg',
    'images/deal3.jpg',
  ]

  return (
        <div className="content__container">
            <Works />
            <Find />
            <Trend photos={photos}/>
            <Deals deals={deals} />
        </div>
  )
}

export default Content