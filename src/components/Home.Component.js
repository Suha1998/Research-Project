import React, {Component} from 'react';
import "../css/styles.css";
//import "../css/bootstrap.min.css";



export default class Home extends Component{
    render(){
        return(
            <div className="container-fuild">
        <header class="masthead">
                <div class="masthead-subheading">Welcome To Party!</div>
                <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
        </header>


            <div class="body pt-2">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Find Out More</h2>
                    <h3 class="section-subheading text-muted">Let's Plan Together</h3>
                </div>
                <ul class="timeline">
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="https://rukminim1.flixcart.com/image/275/275/jy3anbk0/balloon/e/e/m/63-happy-birthday-foil-balloon-silver-metallic-balloons-blue-original-imafgy3jzhcfsgwz.jpeg?q=90" alt="new" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4> <a href="https://www.pinterest.com/JOLLYballoons/birthday-party-decorations-in-sri-lanka/" class="btn btn-primary">Get Ideas!</a></h4>
                                <h4 class="subheading">Decorations</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Decorations make a party more attractive to the audience.</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="https://5.imimg.com/data5/VO/VC/GLADMIN-34253186/wedding-catering-service-250x250.jpg" alt="new" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4> <a href="https://www.pinterest.com/pizzazzerie/party-food-recipes/" class="btn btn-primary">Get Ideas!</a></h4>
                                <h4 class="subheading">Food Menu</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Make the next party you host a wonderful experience for everyone by using the these ideas for birthday parties.</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="https://icubeelectronics.com/wp-content/uploads/2018/12/alcohol-bar-drinks-party-low-res-750x1024-e1543606868952-270x300.jpg" alt="new" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4> <a href="https://bakingthegoodstuff.com/dizzy/" class="btn btn-primary">Get Ideas!</a></h4>
                                <h4 class="subheading">Liquor</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">A great party calls for fabulous food and drink. Impress your guests with unique interactive ideas.</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/819IwMkrMUL._AC_SL1200_.jpg" alt="new" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4> <a href="https://id.pinterest.com/bpartyideas/birthday-party-invitations/" class="btn btn-primary">Get Ideas!</a></h4>
                                <h4 class="subheading">Invitations</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Invite your loved ones, friends with these amazing invitation cards designs.</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image">
                            <h4>
                                Plan
                                <br />
                                Your Party
                                <br />
                                today!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
            <footer class="footer d-flex justify-content-center my-5 py-3 border border-round">
        <span class="">Copyright &copy; Smarty App 2020</span>
   </footer>
    
  </div>
        )
    }
}