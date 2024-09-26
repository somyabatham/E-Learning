import React from 'react'
import "../Css/Tailwindc.css"
import tailwind from "../img/tailwind.jpeg"
import { Link } from 'react-router-dom'
function Tailwindc()  {
  return (
    <div>
        <div className='header'>
        <h1>Learn Tailwind</h1>
        <Link><button>Buy This</button></Link>
    </div>
    <div >
        <img src={tailwind} className='imgt' alt='img'/>
    </div>
    <h1>Get started with Tailwind CSS</h1>
    <p>
    Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

It's fast, flexible, and reliable — with zero-runtime.
</p>
<h3>Installation</h3>
<p>The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.

</p>
<h4> 1.Install Tailwind CSS</h4>
<p>Install tailwindcss via npm, and create your  <font color="blue">tailwind.config.js</font> file.</p>

<h4>2.Configure your template paths</h4>
<p>Add the paths to all of your template files in your <font color="blue">tailwind.config.js </font>file.</p>
<h4>3.Add the Tailwind directives to your CSS</h4>
<p>Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.<br/>
    <font color="blue">@tailwind base; <br/>
@tailwind components;<br/>
@tailwind utilities;</font>
</p>
<h4>4.Start the Tailwind CLI build process</h4>
<p>Run the CLI tool to scan your template files for classes and build your CSS.<br/>
   Example= <font color="blue">npx tailwindcss -i ./src/input.css -o ./src/output.css --watch</font>
</p>
<h4>5.Start using Tailwind in your HTML</h4>
<p>Add your compiled CSS file to the head and start using Tailwind’s utility classes to style your content.</p>

    </div>
  )
}

export default Tailwindc