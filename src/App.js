import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navigation from "./Components/navigation";
import Uber from "./uber.png";
import Lyft from "./lyft.png";
import Sidecar from "./sidecar.png";
import Map from "./map.jpg";
import { Parallax, Background } from 'react-parallax';
import WhiteHouse from "./whitehouse.JPG";
import Subway from "./subway.jpg";
import Pizza from "./pizza.jpeg";
import Dress from "./dress.jpg";
import Logo from "./BPA-logo.png";
import Burger from "./burger.jpg";
import Salmon from "./salmon.jpeg";
import RedLoop from "./Red-Loop.jpg";
import BlueLoop from "./Blue-Loop.jpg";
import Metro from "./Metro.png";
import Convention from "./Convention.png";

const App = () => (

  <HashRouter>
    <div>
      <Route exact path="/" component={homeWindow} />
      <Route path="/home" component={homeWindow} />
      <Route path="/transportation" component={transportWindow} />
      <Route path="/food" component={foodWindow} />
      <Route path="/attractions" component={attractionWindow} />
      <Route path="/dresscode" component={dressWindow} />
      <Route path="/maps" component={mapsWindows} />
    </div>
  </HashRouter>
);


const homeWindow = () => (
  <div className="HomeApp">
    <header className="App-header">
    <h1>2020 National Leadership Conference</h1>
    </header>
    <div class="nav">
    <Link to="/home"><button class="home">🏠 Home</button></Link>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
    <br/>
    </div>
    <br/> 
    <h1 class="h1Content">While at the 2020 BPA National Leadership Conference: </h1>
    <img class="WhiteHouse" src={WhiteHouse} />
    <h1 class="HouseText">Explore American Monuments.</h1>
    <img class="Subway" src={Subway} />
    <h1 class="SubText">Ride on the Subway.</h1>
    <img class="Pizza" src={Pizza} />
    <h1 class="ZaText">Eat world-class food.</h1>
  </div>
);

const transportWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>2020 National Leadership Conference</h1>
    </header>
    <Link to="/home"><button class="home">🏠 Home</button></Link>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
  <br/>
    <Parallax blur={10} bgImage={require('./taxi.jpg')} bgImageAlt="map" strength={500}>
           <div class="box">
            <h1 class="paralaxtext">Transportation</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>
  <div class="divContent">
    <h1>SuperShuttle</h1>
    <h2><i>For transport to and from airports</i></h2>
    <h3><i>From Reagan National (DCA) to Gaylord National</i></h3>
    <p>6:00 AM - 8:00 PM | Departs every 20 minutes</p>
    <p>$18 one way/ $33 per person, pre-paid round trip/ $85 for exclusive van service</p>
    <p><i>Pricing does not include $2.00 airport entry fee</i></p><br/>
    <h3><i>From Dulles International Airport (IAD) to Gaylord National</i></h3>
    <p>$45 per passenger/$125 exclusive van</p>
    <p><i>Pricing does not include $1.00 airport entry fee</i></p><br/>
    <h3><i>From Baltimore/Washington Airport (BWI) to Gaylord National</i></h3>
    <p>$45 per passenger/$125 exclusive</p>
    <br/><br/>
    <h1>Metro</h1>
    <p>The Metro offers an easy and convenient way to navigate the capital</p>
    <p>National Harbor and the Gaylord National Hotel are connected to the Washington Metro system (Metropolitan Area Transit Authority, or WMATA), via a limited-stop bus route.</p>
    <p>For bus schedules, route maps, and current prices, please visit the <a href="http://www.wmata.com/bus/timetables/view.cfm?line=205&x=53&y=4" rel="nofollow" target="_blank">WMATA website</a></p>
    <p>The closest Metro station is <i>Huntington Station,</i> located on the <i>Yellow Line</i> about 5 miles from National Harbor in Alexandria</p>
    <br/>
    <p><b>Hours</b></p>
    <p>Monday-Thursday	5 am-11:30 pm</p>
    <p>Friday	5 am-1 am</p>
    <p>Saturday	7 am-1 am</p>
    <p>Sunday	8 am-11 pm</p><br/>
    <p>Prices vary drastically based off of your current station and destination station so we ask you to refer to the <a href="https://www.wmata.com/rider-guide/stations/index.cfm" rel="nofollow" target="_blank">Metro Fares Website</a> for more information.</p>
    <h2 class="h1Content">Metro Map</h2>
    <img class="Metro" src={Metro} />
    <h1>Shuttle Service to MGM National Harbor, Tanger Outlets and more</h1>
    <p>Registered overnight guests at Gaylord National can enjoy FREE transportation on the Harbor Circulator Bus as part of the resort fee. This shuttle runs 7 days a week from 11am to 10:13pm on Sunday-Thursday and till 12:53am on Friday and Saturdays.</p>
    <br/><br/>
    <h1>D.C. Hop-On Hop-Off Trolley Tour from Gaylord National</h1>
    <p>With 25 stops it's easy to tour the capital region with the Old Town Trolley Hop-On Hop-Off Tour. Discover D.C.’s top attractions at your own pace, including the White House, Lincoln Memorial and the only tour to take you into the Arlington National Cemetery.</p>
    <br/>
    <p><b>Shuttle Time:</b></p>
    <p>Gaylord National Resort (pick up in the bus loop) 7 days a week</p>
    <p>Departs: 8:35am</p>
    <p>Returns: 5:30pm</p>
    <p><i>These are the only times in which the shuttle will depart and return to the hotel. Once in the capital you may get on and off the trolley as you wish. The trolleys operate on a 30 minute cycle.</i></p>
    <br/>
    <p>Tickets can be purchased at Gaylord National’s Concierge Desk or by calling 202-969-1437. You may also puchase tickets <a href="https://www.trolleytours.com/washington-dc#home-sectioni" rel="nofollow" target="_blank">online</a></p>
    <h2 class="h1Content">Blue Loop</h2>
    <img class="BlueLoop" src={BlueLoop} />
    <h2 class="h1Content">Red Loop</h2>
    <img class="RedLoop" src={RedLoop} />
    <br/>
    <br/>
    <br/>
    <img class="Logo" src={Logo} />
    </div>
    <br/>
  </div>
);
const foodWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>2020 National Leadership Conference</h1>
    </header>
    <Link to="/home"><button class="home">🏠 Home</button></Link>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
  <br/>
    <Parallax blur={10} bgImage={require('./pizza.jpeg')} bgImageAlt="map" strength={500}>
           <div class="box">
            <h1 class="paralaxtext">Food</h1>
           </div>
           <div style={{height: '300px'}} />
       </Parallax>
  <div class="divContent">
        <h1 class="title">Places to Eat:</h1>
        <h2>Inside the Hotel</h2>
        <h3>The Cocoa Bean Express - Coffee</h3>
        <p>Hours: 5:30 pm - 9:30 pm</p>
        
        <h3>Cocoa Bean Coffee House - Coffee</h3>
        
        <p>Hours: All Day</p>
        
        <h3>Pienza Italian Market - Breakfast and Lunch</h3>
        
        <p>Hours: 5:30 pm - 9:30 pm</p>
        
        <h3>National Pastime Sports Bar & Grill - Lunch and Dinner</h3>
        
        <p>Hours: 11 am - 12 am</p>
        
        <h3>Old Hickory Steakhouse - Dinner</h3>
        
        <p>Hours: 5:30 pm - 9:30 pm</p>
        
        <br/>
      <img class="burger" src={Burger}/>
      <br/>
        <h2>Outside the Hotel</h2>
        <h3>Starbucks - Coffee</h3>
        
        <p>167 Waterfront St, Oxon Hill, MD 20745</p>
        <p>.2 mile - 4 min walk</p>
        <p>Hours: 5:30 am- 10 pm</p>
        
        <h3>Public House National Harbor - Breakfast, Lunch, and Dinner</h3>
        
        <p>199 Fleet St, Oxon Hill, MD 20745</p>
        <p>.1 mile - 2 min walk</p>
        <p>Hours: 9 am - 2 am</p>
        
        <h3>Grace’s Mandarin - Lunch and Dinner</h3>
        
        <p>188 Waterfront St, Oxon Hill, MD 20745</p>
        <p>.1 mile - 2 min walk</p>
        <p>Hours: 11:30 am - 10 pm</p>
        
        <h3>Brother Jimmy’s BBQ - Lunch and Dinner</h3>
        
        <p>1177 Fleet St, Oxon Hill, MD 20745</p>
        <p>.1 mile - 2 min walk</p>
        <p>Hours: 11:30 am - 2 am</p>
        
        <h3>Succotash - Lunch and Dinner</h3>
        
        <p>186 Waterfront St, Oxon Hill, MD 20745</p>
        <p>.1 mile - 2 min walk</p>
        <p>Hours: 11:30 am - 10pm</p>
        
        <br/>
        <img class="salmon" src={Salmon}/>
        <br/>
        <br/>
        <br/>
        <img class="Logo" src={Logo} />
    </div><br/>
  </div>
);
const attractionWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>2020 National Leadership Conference</h1>
    </header>
    <Link to="/home"><button class="home">🏠 Home</button></Link>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
  <br/>
    <Parallax blur={10} bgImage={require('./whitehouse.JPG')} bgImageAlt="map" strength={500}>
           <div class="box">
            <h1 class="paralaxtext">Attractions</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>
     <div class="divContent">
     <div align="left">
     <h1 class="title" color="#D6BA8A">Smithsonians</h1>
             <h2 color="#D6BA8A">Policies/Prohibited Items</h2>
             <ul>
                  <li>Still and video photography is permitted for noncommercial use in the museums and exhibitions, unless otherwise posted. The use of tripods, monopods, or selfie sticks in the museums and gardens is strictly prohibited.</li>
                  <li>Smoking is prohibited in all Smithsonian facilities.</li>
                  <li>Strollers are permitted in all museums*; a limited number of strollers are available for rent at the Zoo.</li>
                  <li>Service animals are welcome in the museums and the National Zoo. Pets are not permitted.</li>
                  <li><i>Some museums require visitors and/or bags to go through metal detectors or x-ray screenings. Please refer to the specific museum bellow to determine their policies. Those who are unable to go through the metal detector will be hand-screened with an electronic wand by security personnel.</i></li>
              </ul>
              <h2 color="#D6BA8A"><b>While on Smithsonian Property</b></h2>
                  <ul>
                        <li>Do not Carry firearms, other dangerous or deadly weapons, or explosives, either openly or concealed on the premises. The prohibition on firearms applies to all visitors, including those with firearm permits, but not to active law enforcement personnel authorized to carry firearms. Note: Kirpans (ceremonial knives) are religious articles of faith often worn by Sikhs. These knives are permitted in the museums as long as the blades are 2.5 inches or less in length, consistent with federal law (18 USC 930)</li>
                        <li>Do not Display or carry placards, signs, or banners</li>
                        <li>Do not Destroy, damage, or remove property</li>
                        <li>Do not Climb upon any part of a building</li>
                        <li>Do not Use loud, abusive, or otherwise improper language</li>
                        <li>Do not Loiter, sleep, or participate in unwarranted assemblies</li>
                        <li>Do not Create any hazard to persons or things</li>
                        <li>Do not Perform obscene or indecent acts</li>
                        <li>Do not Engage in disorderly conduct</li>
                        <li>Do not Use, possess, or sell illegal drugs</li>
                        <li>Do not Bring dogs or other animals, other than service animals</li>
                        <li>Do not Take photographs for advertising or any other commercial purpose</li>
                        <li>Do not Solicit for commercial or charitable purposes or distribute advertisements, pamphlets, handbills, and flyers</li>
                  </ul>
             <li><b><i>African American Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>1400 Constitution Ave NW, Washington, DC</li>
                  <li><b>Hours: </b>10 a.m. - 5:30 p.m.</li>
                  <li><i>Visitors are required to walk through a metal detector.</i></li>
                  <li><i>Bags are required to be screened via x-ray machine.</i></li>
             </ul>
             <li><b><i>African Art Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>950 Independence Avenue, SW Washington, DC</li>
                  <li><b>Hours: </b>10 a.m. - 5:30 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Air and Space Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>Independence Avenue and 6th Street, SW Washington, DC</li>
                  <li><b>Hours: </b>10 a.m. - 5:30 p.m.</li>
                  <li><i>Visitors are required to walk through a metal detector.</i></li>
                  <li><i>Bags are required to be screened via x-ray machine.</i></li>
             </ul>
             <li><b><i>Air and Space Museum Udvar-Hazy Center</i></b></li>
             <ul>
                  <li><b>Address: </b>14390 Air and Space Museum Parkway, Chantilly, VA</li>
                  <li><b>Hours: </b>10 a.m. - 5:30 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>American Art Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>8th and F Streets, NW Washington, DC</li>
                  <li><b>Hours: </b>11:30 a.m. - 7:00 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>American History Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>14th Street and Constitution Avenue, NW Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:30 p.m.</li>
                  <li><i>Visitors are required to walk through a metal detector.</i></li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>American Indian Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>4th Street  and Independence Avenue, SW Washington, DC</li>
                  <li><b>Hours: </b>10 a.m. - 5:30 p.m.</li>
                  <li><i>Visitors are required to walk through a metal detector.</i></li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Anacostia Community Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>1901 Fort Place SE Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:00 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Archives of American Art</i></b></li>
             <ul>
                  <li><b>Address: </b>8th and F Streets, NW Washington, DC</li>
                  <li><b>Hours: </b>11:30 a.m. - 7:00 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Freer Gallery of Art</i></b></li>
             <ul>
                  <li><b>Address: </b>Jefferson Drive and 12th Street, SW Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:30 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Hirshhorn</i></b></li>
             <ul>
                  <li><b>Address: </b>Independence Avenue at 7th Street, SW Washington, DC</li>
                  <li><b>Hours:</b></li>
                  <ul>
                        <li><b>Museum: </b>10 a.m. - 5:30 p.m.</li>
                        <li><b>Plaza: </b>7:30 a.m. - 5:30 p.m.</li>
                        <li><b>Sculpture Garden: </b>7:30 a.m. - dusk</li>
                  </ul>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>National Zoo</i></b></li>
             <ul>
                  <li><b>Address: </b>3001 Connecticut Ave., NW Washington, DC</li>
                  <li><b>Hours:</b></li>
                  <ul>
                        <li>9 a.m. - 6 p.m. daily</li>
                        <li>Grounds 8 a.m. - 7 p.m.</li>
                        <li>(Weather permitting)</li>
                  </ul>
                  <li><i>All bags will be checked by hand.</i></li>
                  <li><b>In addition to the above, while on Zoo premises, NO VISITOR SHALL:</b>
                  <ul>
                        <li>Kill, injure, or disturb any exhibit or research animal by any means except to secure personal safety</li>
                        <li>Pet, attempt to pet, handle, move, or remove exhibit or research animals</li>
                        <li>Feed exhibit or research animals, except in strict accordance with authorized signs</li>
                        <li>Catch, attempt to catch, trap, remove, or kill any free roaming animals inhabiting the premises</li>
                        <li>Go over, under, between, or otherwise cross any guardrail, fence, moat, wall, or any other safety barrier</li>
                        <li>Seat, stand, or hold children over any safety barrier</li>
                        <li>Throw or toss rocks, or any other missiles into, from, or while on premises</li>
                        <li>Bring strollers, baby carriages, or other conveyances, except wheel chairs, into exhibit buildings and public restrooms</li>
                        <li>Engage in ball games, or any athletic activity, except in places as may be officially designated for such purposes</li>
                        <li>Smoke or carry lighted cigarettes, cigars, or pipes into exhibit buildings, or to have a fire of any kind on the premises</li>
                        <li>Damage, deface, pick, or remove any herb, shrub, bush, tree, or turf, or portion thereof</li>
                  </ul>
                  </li>
             </ul>
             <li><b><i>Natural History Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>10th Street and Constitution Avenue, NW Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:30 p.m.</li>
                  <li><i>Visitors are required to walk through a metal detector.</i></li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Portrait Gallery</i></b></li>
             <ul>
                  <li><b>Address: </b>8th and F Streets, NW Washington, DC</li>
                  <li><b>Hours: </b>11:30 a.m. - 7:00 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Postal Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>2 Massachusetts Avenue, NE Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:30 p.m.</li>
                  <li><i>Visitors are required to walk through a metal detector.</i></li>
                  <li><i>Bags are required to be screened via x-ray machine.</i></li>
             </ul>
             <li><b><i>Renwick Gallery</i></b></li>
             <ul>
                  <li><b>Address: </b>1661 Pennsylvania Avenue, NW Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:30 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
                  <li><b>*Note: </b>Strollers currently are not permitted in the Renwick galleries on Friday, Saturday and Sunday; holidays; and at other times when the galleries are especially crowded. Stroller parking is available at the 17th Street accessible entrance. This temporary measure is to protect the artworks.</li>
             </ul>
             <li><b><i>S. Dillon Ripley Center</i></b></li>
             <ul>
                  <li><b>Address: </b>1100 Jefferson Drive, SW Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:30 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Sackler Gallery</i></b></li>
             <ul>
                  <li><b>Address: </b>1050 Independence Avenue, SW Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:30 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Smithsonian Castle</i></b></li>
             <ul>
                  <li><b>Address: </b>1000 Jefferson Drive, SW Washington, DC</li>
                  <li><b>Hours: </b>8:30 a.m. - 5:30 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Smithsonian Gardens</i></b></li>
             <ul>
                  <li><b>Address: </b>Smithsonian museum grounds Washington, DC</li>
                  <li><b>Hours: </b>Haupt Garden open daily dawn to dusk; all others open 24 hours</li>
             </ul>
             <li><b><i>United States Holocaust Memorial Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>100 Raoul Wallenberg Pl SW, Washington, DC 20024</li>
                  <li><b>Hours: </b>10 a.m. - 5:20 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
     <h1 class="title" color="#D6BA8A">Memorials/Monuments</h1>
     <h2 class="h2ul" color="#D6BA8A">Arlington National Cemetery</h2>
     <ul>
            <li><b><i>Women in Military Service for America Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>Memorial Ave & Schley Dr, Arlington, VA 22202</li>
                   <li><b>Hours: </b>8am – 5pm</li>
            </ul>
            <li><b><i>Arlington House (Robert E Lee Memorial)</i></b></li>
            <ul>
                   <li><b>Address: </b>321 Sherman Dr, Fort Myer, VA 22211</li>
                   <li><b>Hours: </b>CLOSED FOR REHABILITATION</li>
            </ul>
            <li><b><i>Tomb of the Unknowns</i></b></li>
            <ul>
                   <li><b>Address: </b>1 Wilson Ave, Fort Myer, VA 22211</li>
                   <li><b>Hours: </b>8a.m. - 5p.m.</li>
            </ul>
            <li><b><i>U.S. Marine Corps War Memorial (Iwo Jima Memorial)</i></b></li>
            <ul>
                   <li><b>Address: </b>Iwo Jima Memorial Access Rd, Arlington, United States</li>
                   <li><b>Hours: </b>6 a.m. - 12 a.m.</li>
            </ul>
      </ul>
      <h2 class="h2ul" color="#D6BA8A">Tidal Basin</h2>
      <ul>
            <li><b><i>Thomas Jefferson Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>701 E Basin Dr SW, Washington, DC 20242</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
            <li><b><i>Franklin Delano Roosevelt Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>1850 West Basin Dr SW, Washington, DC 20242</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
            <li><b><i>Martin Luther King, Jr. Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>1850 West Basin Dr SW, Washington, DC 20242</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
      </ul>
      <h2 class="h2ul" color="#D6BA8A">National Mall</h2>
      <ul>
            <li><b><i>Lincoln Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>2 Lincoln Memorial Cir NW, Washington, DC 20037</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
            <li><b><i>Korean War Veterans Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>1964 Independence Ave SW, Washington, DC 20024</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
            <li><b><i>Vietnam Veterans Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>5 Henry Bacon Dr SW, Washington, DC 20007</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
            <li><b><i>Constitutional Gardens</i></b></li>
            <ul>
                   <li><b>Address: </b>Constitution Ave NW, Washington, DC 20024</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
            <li><b><i>World War II Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>1750 Independence Ave SW, Washington, DC 20024</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
            <li><b><i>Washington Monument</i></b></li>
            <ul>
                   <li><b>Address: </b>2 15th St NW, Washington, DC 20024</li>
                   <li><b>Hours: </b>9a.m. - 10p.m.</li>
            </ul>
            <li><b><i>The American Veterans Disabled for Life Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>150 Washington Ave SW, Washington, DC 20024</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
      </ul>
    <h1 class="title" color="#D6BA8A">Government Buildings</h1>
    <p align="center"><i>Please be respectful of the appropriate etiquette at all times when on government grounds. Remember when at NLC you are not only representing your state and the national organization, but also yourself.</i></p>
        <h2><b><i>United States Capital Building</i></b></h2>
            <ul>
                   <li><a href="https://www.visitthecapitol.gov/" rel="nofollow" target="_blank">Capital Building Website</a></li>
                   <li><b>Address: </b>First St NE, Washington, DC 20515</li>
                   <li><b>Hours: </b>Monday - Saturday: 8:30a.m. - 4:30p.m.</li>
                   <li><h3><b>Prohibited Items: </b></h3></li>
                   <ul>
                          <li><i>Before entering the Capitol Visitor Center, all visitors are screened by a magnetometer and all items that are permitted inside the building are screened by an x-ray device.</i></li>
                          <li><i>The following items are strictly prohibited in the Capitol, including the Capitol Visitor Center:</i></li>
                          <ul>
                                <li>Liquid, including water</li>
                                <li>Food or beverages of any kind, including fruit and unopened packaged food</li>
                                <li>Aerosol containers</li>
                                <li>Non-aerosol spray (Prescriptions for medical needs are permitted.)</li>
                                <li>Any pointed object, e.g. knitting needles and letter openers (Pens and pencils are permitted.)</li>
                                <li>Any bag larger than 18" wide x 14" high x 8.5" deep</li>
                                <li>Electric stun guns, martial arts weapons or devices</li>
                                <li>Guns, replica guns, ammunition, and fireworks</li>
                                <li>Knives of any size</li>
                                <li>Mace and pepper spray</li>
                                <li>Razors and box cutters</li>
                         </ul>
                         <li><i>The following items are not allowed in the Senate and House Galleries:</i></li>
                         <ul>
                                <li>Battery-operated electronic devices (medical devices are permitted)</li>
                                <li>Cameras</li>
                                <li>Cans and bottles</li>
                                <li>Creams, lotions or perfume</li>
                                <li>Packages, briefcases, backpacks or suitcases</li>
                                <li>Strollers</li>
                                <li>Video recorders or any type of recording device</li>
                                <li><i>Each Gallery operates a checkstand where visitors may store these items securely while they are visiting that Gallery.</i></li>
                         </ul>
                  </ul>
                  <li><h3><b>Tours: </b></h3></li>
                  <ul>
                        <li><i>Advance reservations are recommended, but not required.</i></li>
                        <li>Small groups (of 15 and fewer people) can <a href="https://tours.visitthecapitol.gov/cvc#.WqlNZijwaHs" rel="nofollow" target="_blank">click here</a> to create an account and reserve a tour date and time. <i>Reservations are available 90 days in advance.</i></li>
                        <li>Tour services and organizations with groups of more than 15 participants should <a href="https://tours.visitthecapitol.gov/CVC/#.WqlNzyjwaHs" rel="nofollow" target="_blank">click here</a> to access the group section of the online reservation system. <i>Reservations for groups become available 120 days in advance.</i></li>
                        <li>Same-day passes are available at the Information Desks located on the lower level of the Visitor Center. During spring, summer and some holiday periods, the availability of same-day tour passes may be limited. There may be a wait to acquire passes. <i>Please plan accordingly and arrive early, if possible.</i></li>
                  </ul>
            </ul>
            
            <h2><b><i>White House</i></b></h2>
            <ul>
                   <a href="https://www.whitehouse.gov/about-the-white-house/tours-events/" rel="nofollow" target="_blank">White House Tour Page</a>
                   <li><b>Address: </b>1600 Pennsylvania Ave NW, Washington, DC 20500</li>
                   <li><b>Hours: </b>Tuesday-Thursday: 7:30-11:30a.m., Friday-Saturday: 7:30a.m.-1:30p.m.</li>
                   <li><h3><i><Prohibited Items:</i></h3></li>
                   <ul>
                        <li><i>Prohibited items include, but are not limited to, the following:</i></li>
                        <ul>
                              <li>Video Recorders</li>
                              <li>Handbags, book bags, backpacks or purses</li>
                              <li>Food or beverages, tobacco products, personal grooming items (i.e. makeup, lotion, etc.)</li>
                              <li>Strollers</li>
                              <li>Any pointed objects</li>
                              <li>Aerosol containers</li>
                              <li>Guns, ammunition, fireworks, electric stun guns, mace, martial arts weapons/devices, or knives of any size</li>
                        </ul>
                        <li>Smartphones and compact cameras with a lens no longer than 3 inches (stills only) are permitted on the public tour route as long as their use does not interfere with other guests’ enjoyment of the tour.</li>
                        <li>Video cameras including any action camcorders, cameras with detachable lenses, tablets, tripods, monopods and camera sticks are not permitted.</li>
                        <li>Flash photography or live stream as well as talking or texting on cellular phones is not permitted while on the tour.</li>
                        <li>The U.S. Secret Service reserves the right to prohibit any other personal items. Umbrellas, wallets, car keys, and cell phones (including those with cameras) are permitted. However, guests will not be allowed to use cell phones inside the White House. Phones used inside the White House may be confiscated by US Secret Service.</li>
                        <li>Please note that no storage facilities are available on or around the complex. Individuals who arrive with prohibited items will not be permitted to enter the White House.</li>
                   </ul>
                <li><h3><i>Tours:</i></h3></li>
                <ul>
                    <li><i>Public tour requests MUST be submitted through one’s Member of Congress.</i></li>
                    <li>Tours are scheduled on a first come, first served basis.</li>
                    <li>Requests can be submitted up to three months in advance and no less than 21 days in advance. You are encouraged to submit your request as early as possible as a limited number of spaces are available.</li>
                    <li><i>All White House tours are free of charge.</i></li>
                    <li>All guests 18 years of age or older will be required to present a valid, government-issued photo identification</li>
                    <ul>
                          <li>Valid government-issued United States identification card (e.g. drivers license, military ID, etc.)</li>
                          <li>Valid United States or other official government-issued passports</li>
                    </ul>
                </ul>
            </ul>
            
            <b><i>Supreme Court</i></b>
            <ul>
                   <li><b>Address: </b></li>
                   <li><b>Hours: </b></li>
            </ul>
    <br/><br/><br/></div>
    <img class="Logo" src={Logo} />
    </div>
    <br/></div>
);
const dressWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>2020 National Leadership Conference</h1>
    </header>
    <Link to="/home"><button class="home">🏠 Home</button></Link>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
  <br/>
    <Parallax blur={10} bgImage={require('./suit.jpg')} bgImageAlt="map" strength={500}>
           <div class="box">
            <h1 class="paralaxtext">Dress Code</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>
    <div class="divContent">
    <h1 class="title">NLC Dress Code</h1>
    <p>In order to promote a professional atmosphere, BPA’s Board of Trustees has developed the following official dress code policy for the Business Professionals of America National Leadership Conference. Students, advisors and chaperones must follow the dress code. It is recommended that all guests follow established dress code policy.</p>
    <p>Members not dressed in required attire will not be allowed to participate in any session or any competitive event. Members not adhering to the Professional Dress Code will not be allowed on stage.</p>
    <p>Members refused entrance to an event will be given the opportunity to change into appropriate attire immediately and participate/compete in the event. Having changed into appropriate attire, the member will join testing in progress. No additional time will be given for time missed.</p>
    <p>Members also have the right to grieve the issue immediately after being refused entrance. Grievance of the Dress Code policy will not be accepted if not received in writing at Competitive Events headquarters within 15 minutes of the infraction in question.</p>
<img class="dress" src={Dress} />
    <h2>Professional Dress Code</h2>
        <p><i>Required for the following events: General Sessions, all Competitive Events (judged, non-judged, and open), Campaign Rally, Caucuses, Workshops, National Leadership Academy.</i></p>
        <h3>Women:</h3>
              <p>Pant or skirt suit.</p>
              <p>Dress skirt or dress slacks with coordinated blouse and/or sweater.</p>
              <p>Business professional “dress.”</p>
              <p>BPA blazer with dress skirt or dress slacks and blouse or sweater.</p>
              <p>Dress shoes or dress sandals with heel are required with all of the above.</p>
              <p>Skirt length may be no greater than two inches above the top of the knee.</p>
              <p>This excludes all denim for any of the above.</p>
        <h3>Men:</h3>
              <p>Dress slacks, dress shirt, and tie.</p>
              <p>Suit, dress shirt, and tie.</p>
              <p>Sport coat, coordinated dress slacks, dress shirt, and tie.</p>
              <p>BPA blazer with dress slacks, dress shirt, and tie.</p>
              <p>Dress shoes and dress socks are required with all of the above.</p>
              <p>This excludes all denim for any of the above.</p>
    <h2>Casual Dress Code</h2>
        <p><i>Required for the following events: Tours, Special Events and Exhibit Hall.</i></p>
        <h3>Women:</h3>
              <p>Sportswear (jeans), pants, and shirt, T-shirt, and shorts.</p>
              <p>Footwear required with all of the above.</p>
        <h3>Men:</h3>
              <p>Sportswear (jeans), pants and shirt, T-shirt, and shorts.</p>
              <p>Footwear required with all of the above. </p>
    <h2>The following are unacceptable during BPA activities:</h2>
              <p>Strapless, spaghetti straps, tube tops, halter tops, midriff tops.</p>
              <p>Spandex, lycra, or transparent clothing.</p>
              <p>Cut-offs or ragged clothing.</p>
              <p>Clothing with inappropriate words and pictures.</p>
      <p><b>Swim suits</b> must be covered with appropriate attire while in any area except the swimming pool or designated sunbathing area.</p>
      <br/>
      <br/>
      <br/>
      <img class="Logo" src={Logo} />
      </div>
      <br/>
      </div>
);
const mapsWindows = () => (
  <div className="App">
    <header className="App-header">
    <h1>2020 National Leadership Conference</h1>
    </header>
    <Link to="/home"><button class="home">🏠 Home</button></Link>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
   <br/>
  <br/>
    <Parallax blur={10} bgImage={require('./map.jpg')} bgImageAlt="map" strength={500}>
           <div class="box">
            <h1 class="paralaxtext">Maps</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>
    <div class="divContent">
    <h2>The Hotel:</h2>
    <p>The 2020 National Conference will be held at the Gaylord Palms Resort in Washington DC. Use the following map to navigate the hotel conference center.</p>
    <img class="Convention" src={Convention} /><br/><br/>
    <h2>Interactive Map</h2>
    <p><i>Use the following interactive map to explore the surrounding area.</i></p>
    <iframe class="hotel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.226301767285!2d-77.01896208465307!3d38.78144617958869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b0734d793d5d%3A0x7fccb753cbe0c4f7!2sGaylord+National+Resort+%26+Convention+Center%2C+Fort+Washington%2C+MD+20745!5e0!3m2!1sen!2sus!4v1541349162518" allowfullscreen></iframe>
    <br/><br/>
      <h2>Metro Map</h2>
      <p><i>Use this map to help you navigate the Metro System</i></p>
      <img class="Metro" src={Metro} /><br/><br/>
      <h2>D.C. Hop-On Hop-Off Trolley Tour</h2>
      <p><i>Use this map to help you follow the Trolley Stops</i></p>
      <h3>Blue Loop</h3>
      <img class="BlueLoop" src={BlueLoop} />
      <h3>Red Loop</h3>
      <img class="RedLoop" src={RedLoop} />
      <br/>
      <br/>
      <img class="Logo" src={Logo} />
      </div>
      <br/>
      </div>
);
export default App;
