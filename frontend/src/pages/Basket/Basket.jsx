// import React from 'react'
// import { Helmet } from 'react-helmet'

// const Basket = () => {
//     const [basket,setbasket]=usestate([])


    
    

//   return (
//     <div>
//         <Helmet>
//             <title>basket</title>
//         </Helmet>
//         <Table className='table'>
//        <TableHead>
//            <TableRow>
//                <TableCell>Description</TableCell>
//                <TableCell>Price</TableCell>
//                <TableCell>Amount</TableCell>
//            </TableRow>
//        </TableHead>
//        <TableBody>
//           {basket.map(item => {
//               return (
//                 <TableRow key = {item.uid}>
//                    <TableCell>{item.description}</TableCell>
//                    <TableCell numeric>{item.commaSalesPrice/100}</TableCell>
//                    <TableCell numeric>{item.count}</TableCell>
//                 </TableRow>
//                 );
//           })}
//        </TableBody>
//     </Table>
//     </div>
//   )
// }

// export default Basket