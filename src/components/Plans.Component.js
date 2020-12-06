import React, { Component } from 'react';


export default class Plans extends Component {
    render() {
        return (
          <div className ="container-form">
           <br/><br/>
            <div className="card card-body mb-4 p-4">
               <h1 className="display-4 text-center">
               <i className="fas fa-birthday-cake"></i> Search For A Plan
               </h1>
             <p className="lead text-center">Get A Plan For Your Party</p>
             <a href="/search"><button className="btn btn-primary btn-lg btn-block mb-5"
              type="submit">Get Your Plans</button></a>

            </div>
            <div className="card card-body mb-4 p-4">
               <h3 className="display-4 text-center">
                How To Plan A Party Properly.......
               </h3>
             <p className="lead"><i class="fas fa-list"></i> &nbsp; To Do List</p>
              <br/>
              <h4>Pre-planning: A month before the party</h4>
              <p>Preparing for a party with extra time is the best way to guarantee that you'll have a relatively hassle-free party after.</p>
              <ul>
                <li><b>Choose the Date</b></li>
                 <p>The ideal day for a party is over the weekend. This ensures that your guests will be available. You can pick the weekend before or after your actual birthday or the event.
</p>
                <li><b>Pick the Venue</b></li>
                <p> If you want an intimate party with just friends and family, then host the party at your house. If you want something more formal, then go with a restaurant or hotel function room.</p>
                
                <li><b>Your Guest List</b></li>
                <p>Make a list of all the guests that you want invited to you party so you won't forget anyone.</p>

                <li><b>Invitations</b></li>
                <p>Once your venue and date are set, send out your party invitations to your guest list.</p>
                
                <li><b>Budget</b></li>
                <p>Avoid spending too much money by having a budget set before starting your party planning.</p>
              </ul>
              <h4>Planning the Details: 3 weeks before the party</h4>
              <p>With just weeks to plan for everything, it's time to decide on the menu, decorations, and entertainment or games.</p>
              <ul>
                <li><b>Food</b></li>
                <p>A buffet is the most popular and easiest method of serving food, especially if you're having the party in a restaurant or at home. It's relatively less expensive than having an ala carte menu. Serve snacks for guests to nibble on while waiting for dinner to be served.</p>

                <li><b>Decorations</b></li>
                <p>It's easier to decorate if you have a theme. Many of our party decorations can be matched to suit any theme.</p>
                
                <li><b>Entertainment and Games</b></li>
                <p>To make the event more fun, prepare some activities and games to keep the guests entertained. Keep activities related to the theme you chose. Play your favorite music to entertain the guests.</p>
                
                <li><b>Favours</b></li>
                <p>Your guests will greatly appreciate a keepsake from your party. Be sure to give out party favors that are tied to your theme. For instance, personalized playing cards make the perfect favors for a casino themed party. </p>
              </ul>
              <center><h5>FUN VIRTUAL BIRTHDAY PARTY IDEAS YOU CAN DO WHILE SOCIAL DISTANCING</h5>
            <p>Click the following button to view more party ideas while social distancing</p></center>
            <a class="btn btn-primary" href="https://www.mimisdollhouse.com/virtual-birthday-party-ideas/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed:%20MimisDollhouse/2%20(Mimi%27s%20Dollhouse)">View More</a>
            </div>
            </div>
        
        )
    }
}
