const Template = ({templates,setMeme}) => {
  return (
    <div className='templates'>

       {templates.map((template)=>(
      <div key = {template.id} className = "template"  onClick={ ()=>
        {setMeme(template)} }>
        <div
        style={{background:`url(${template.url})`}}
        className = "image"> 
        </div> 
        </div> 
      )
      )}
    </div>
  )
}
export default Template ;




