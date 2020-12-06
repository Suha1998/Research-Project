import React, { Component } from 'react';

import "../css/rating.css";

 class TableRow extends Component {

    render() {
        return (
           <tr>
               <td> { this.props.obj.planner_name } </td>
               <td> { this.props.obj.party_category } </td>
               <td> { this.props.obj.contact_no } </td>
               <td> { this.props.obj.address } </td>
               <td> { this.props.obj.specialities } </td>
               <td> { this.props.obj.previous_works } </td>
              {/* <td>
                   <div>
                       <label>★</label>
                       <label>★</label>
                       <label>★</label>
                       <label>★</label>
                       <label>★</label>
                   </div>
                <div class="rate">
                    <input type="radio" id={'star1_'+this.props.obj._id} name={'star_'+this.props.obj._id} value="1" />
                    <label for={'star1_'+this.props.obj._id} title="text">1 stars</label>
                    <input type="radio" id={'star2_'+this.props.obj._id} name={'star_'+this.props.obj._id} value="2" />
                    <label for={'star2_'+this.props.obj._id} title="text">2 stars</label>
                    <input type="radio" id={'star3_'+this.props.obj._id} name={'star_'+this.props.obj._id} value="3" />
                    <label for={'star3_'+this.props.obj._id} title="text">3 stars</label>
                    <input type="radio" id={'star4_'+this.props.obj._id} name={'star_'+this.props.obj._id} value="4" />
                    <label for={'star4_'+this.props.obj._id} title="text">4 stars</label>
                    <input type="radio" id={'star5_'+this.props.obj._id} name={'star_'+this.props.obj._id} value="5" />
                    <label for={'star5_'+this.props.obj._id} title="text">5 star</label>
                </div> 
               </td>*/}
           </tr>
        );
    }
}

export default TableRow;