/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import classnames from 'classnames'
import {FiSearch} from 'react-icons/fi'
import {BsPlusCircle} from 'react-icons/bs'
import styles from './styles.module.css'

function getSortOrderValue(sortOrder) {
  return sortOrder.replace(' ', '').toLowerCase()
}

function getPropertiesDisplayText(count) {
  if (count > 1 || count === 0) {
    return 'properties'
  }
  return 'property'
}

const DefaultState = {
  priceFrom: '',
  postcode: '',
  sortOrder: '',
  sortOrders: ['Highest First', 'Lowest First']
}

const filterButton={
  // padding: '15px 15px 15px 15px',
  // borderRadius: '10px',
  // margin: '.5rem auto',
  margin:'0 auto',
  // fontWeight: 'bold',
  minWidth: '80px',
  width:'30%',
  // marginLeft:'6em',
  color:"purple",
  backgroundColor:'orange ',
}

class Filter extends React.Component {
  state = Object.assign({}, DefaultState)

  handleChange = (prop, value) => {
    this.setState({
      [prop]: value
    })
  }

  render() {
    const containerClasses = classnames('container', 'mb-1', styles.container)
    const formClasses = classnames('form-horizontal', styles.form)
    const { priceFrom, postcode, sortOrder, sortOrders } = this.state
    const { postcodes, count, updateFilter } = this.props

    return (

      <div className="mt-4 container desktop-filter" style={{textAlign:"center"}}>
        <div className="w-full md:w-9/12 px-4 mr-auto ml-auto">
          <h2 className="mt-1 filter-header" style={{color:"purple", fontWeight:"bold",fontSize:"18px"}}>
            LET'S FIND A HOME THAT'S PERFECT FOR YOU
          </h2>

        {/* filter form */}
        <form action="#" style={{textAlign:"center", backgroundColor:"", marginTop:"2em", marginBottom:"4em"}}>
          <table classame="filter-options" style={{width:"100%"}}>
            <tbody>
              <tr>
                <td>
                  <select name="location" id="location" style={{border:"none"}}>
                    <option vlaue="" disabled selected> location </option>
                    <option value="location1">location1</option>
                    <option value="location2">location2</option>
                    <option value="location3">location3</option>
                    <option value="location4">location4</option>
                  </select>
                </td>
                <td>
                  <select name="property-type" id="p-type" style={{border:"none"}}>
                    <option vlaue="" disabled selected>Property type </option>
                    <option value="Apartment">Apartment</option>
                    <option value="massionate">massionate</option>
                    <option value="bungalow">bungalow</option>
                    <option value="mansion">mansion</option>
                  </select>
                </td>
                <td>
                  <select name="max-price" id="price" style={{border:"none"}}>
                    <option vlaue="" disabled selected>Max price</option>
                    <option value="10,000">10,0000</option>
                    <option value="20,000">20,000</option>
                  </select>
                </td>
                <td>
                  <span style={{fontWeight:"normal"}}>
                    Advanced <i style={{float:"right", color:"purple", fontWeight:""}}>
                        <BsPlusCircle />
                    </i>
                  </span>
                </td>
                <td style={{backgroundColor:"orange", fontWeight:"normal"}}>
                  <button style={filterButton}>
                    <i style={{float:"left"}}><FiSearch /></i>Search
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        </div>
      </div>
      // <aside className="mt-2">
      //   <div className={containerClasses}>
      //     {/* <h2 data-cy="property-count">
      //       {`${count} private ${getPropertiesDisplayText(count)} for sale`}
      //     </h2> */}

      //     <h4 className="page-tagline" style={{textAlign:"center", color:"purple", fontWeight:"bold", marginTop:"4em"}}>
      //       LETS FIND A HOME THAT'S PERFECT FOR YOU
      //     </h4>

      //     <form
      //       onChange={() => setTimeout(() => updateFilter(this.state), 0)}
      //       className={formClasses}
      //       noValidate
      //     >
      //       {/* <p className="mb-1">
      //         Refine your results
      //         <button
      //           data-cy="clear-button"
      //           className="ml-1 btn btn-sm"
      //           type="button"
      //           onClick={() => {
      //             this.setState(Object.assign({}, DefaultState))
      //             updateFilter({})
      //           }}
      //         >
      //           Clear
      //         </button> */}
      //       {/* </p> */}
      //       <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
      //         <div className=" col-4 col-xs-12">
      //           <div className="form-group">
                 
      //             <div className="col-8 col-sm-12 mr-2 mt-2">
      //             <span className="mr-2">
      //               <label className="form-label " htmlFor="price-from">
      //                 Price from
      //               </label>
      //             </span>
      //               <input
      //                 className="form-input"
      //                 min="0"
      //                 max="10000000"
      //                 type="number"
      //                 id="price-from"
      //                 placeholder="£1,000,000"
      //                 value={priceFrom}
      //                 onChange={event =>
      //                   this.handleChange('priceFrom', Number(event.target.value))
      //                 }
      //               />
      //             </div>

      //           </div>
      //         </div>

      //         <div className="col-4 col-xs-12">
      //           <div className="form-group">

                

      //             <div className="col-8 col-sm-12 mt-2">
      //             <span className="mr-2 mt-2">
      //           <label className="form-label" htmlFor="postcode">
      //                 Postcode
      //               </label>
      //             </span>
      //               <select
      //                 className="form-select"
      //                 id="postcode"
      //                 value={postcode}
      //                 onChange={event =>
      //                   this.handleChange('postcode', event.target.value)
      //                 }
      //               >
      //                 <option value="">Choose...</option>
      //                 {postcodes.map(pc => (
      //                   <option value={pc.toLowerCase()}>{pc}</option>
      //                 ))}
      //               </select>
      //             </div>
      //           </div>
      //         </div>
      //         <div className="col-4 col-xs-12">
      //           <div className="form-group">
                
      //             <div className="col-8 col-sm-12 mt-2">
      //             <span className="mr-2 mt-2">
      //           <label className="form-label" htmlFor="sortorder">
      //           Sort Order
      //               </label>
      //             </span>
      //               <select
      //                 className="form-select"
      //                 id="sortorder"
      //                 value={sortOrder}
      //                 onChange={event =>
      //                   this.handleChange('sortOrder', event.target.value)
      //                 }
      //               >
      //                 <option value="">Choose...</option>
      //                 {sortOrders.map(order => (
      //                   <option value={getSortOrderValue(order)}>{order}</option>
      //                 ))}
      //               </select>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </form>
      //   </div>
      // </aside>
    )
  }
}

export default Filter
