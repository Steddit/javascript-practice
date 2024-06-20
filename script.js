const listItems=[]

for (let i = 0; i < listItems.length; i++) {
  const new=listItems[i]
  
  
}

function addItem(){
  const item=document.querySelector('.newItem')
  const listItem=item.value
  listItems.push(listItem)
  console.log(listItems)
  item.value=''
}