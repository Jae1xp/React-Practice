import React from 'react'

function MemoComp({name}) {
  console.log('rendering Memo Comp');
  
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)
