import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'



function AboutPage() {
  return <Card>

    <div className="">About</div>
      <h1>About this project</h1>
      <p>Please leave a comment for a product or service </p>
      <p> Version 1.0 </p>
      <p>
        <Link href="/"> Back to home</Link>
      </p>
  </Card>
}

export default AboutPage