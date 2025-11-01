import React from 'react';
class MyClassComponent extends React.Component{
  render(){
    return (<>
      Hello This is Class Component
<table border={1} cellSpacing={0} cellPadding={5}>
      <tr>
        <th>S.No</th>
        <th>BookName</th>
        <th>AuthorName</th>
        <th>Price</th>
      </tr>
      {
        this.props.data.map((obj,index)=>{
          return (<tr>
                <td>{index+1}</td>
                <td>{obj.bookName}</td>
                <td>{obj.authorName}</td>
                <td>{obj.price}</td>
          </tr>)
        })
      }
    </table>    </>);
  }
}

export default MyClassComponent;