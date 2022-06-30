import Card from './shared/Card'

function FeedbackItem({item}) {

   // THIS IS COMPONENT THAT HANDLE THE STATE OF THE SPECIFIC COMPONENT
  // const handleClick = () =>{
  //   setRating((prev) =>{
  //     return prev + 1
  //   })
  // }
  // <button onClick={handleClick}>Click</button>

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem