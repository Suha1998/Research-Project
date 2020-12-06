import React, { Component } from 'react';
import "../css/rating.css";

 class Feedback extends Component {


    render() {
        var RatingValue;
        if(this.props.obj.Rate ==1) {
            RatingValue =  <label>★</label> ;
        } else if(this.props.obj.Rate ==2)  {
            RatingValue =  <label>★★</label> ;
        }
        else if(this.props.obj.Rate ==3)  {
            RatingValue =  <label>★★★</label> ;
          }
          else if(this.props.obj.Rate ==4)  {
            RatingValue =  <label>★★★★</label> ;
          }
          else if(this.props.obj.Rate ==5)  {
            RatingValue =  <label>★★★★★</label> ;
          }
          else {
            RatingValue =  <label>★</label> ;
          }
        
        return (
           <tr>
               <td> { this.props.obj.data[0].planner_name} </td>
               <td> { this.props.obj.Comment } </td>
               <td className="gold"> {RatingValue}
                </td> 
           </tr>
        );
    }
}

export default Feedback;