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
import Popup from "reactjs-popup";
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';

const App = () => (

  <HashRouter>
    <div>
      <Route exact path="/" component={homeWindow} />
      <Route path="/home" component={homeWindow} />
      <Route path="/transportation" component={transportWindow} />
      <Route path="/food" component={foodWindow} />
      <Route path="/attractions" component={attractionWindow} />
      <Route path="/smithsonian" component={smithsonianWindow} />
      <Route path="/memorials" component={memorialsWindow} />
      <Route path="/government" component={governmentWindow} />
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
    <Popup className="popup" trigger={<Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>} position="bottom center" on="hover">
    <Link to="/smithsonian"><button class="smithsonian">Smithsonians</button></Link>
    <Link to="/memorials"><button class="smithsonian">Memorials</button></Link>
    <Link to="/government"><button class="smithsonian">Government</button></Link>
  </Popup>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
    <br/>
    </div>
    <br/> 
    <h1 class="h1Content">While at the 2020 BPA National Leadership Conference: </h1>
    <div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2 className="homeTitle">Explore American Monuments</h2>
      <div class="fakeimg"><img className="homeImage" src={WhiteHouse} /></div>
    </div>
    <div class="card">
      <h2 className="homeTitle">Ride on the Subway</h2>
      <div class="fakeimg"><img className="homeImage" src={Subway} /></div>
    </div>
    <div class="card">
      <h2 className="homeTitle">Eat world-class Food</h2>
      <div class="fakeimg"><img className="homeImage" src={Pizza} /></div>
    </div>
  </div>
</div>
  </div>
);

const smithsonianWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>2020 National Leadership Conference</h1>
    </header>
    <Link to="/home"><button class="home">🏠 Home</button></Link>
    <Popup className="popup" trigger={<Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>} position="bottom center" on="hover">
    <Link to="/smithsonian"><button class="smithsonian">Smithsonians</button></Link>
    <Link to="/memorials"><button class="smithsonian">Memorials</button></Link>
    <Link to="/government"><button class="smithsonian">Government</button></Link>
  </Popup>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
  <br/>
    <Parallax blur={10} bgImage={require('./whitehouse.JPG')} bgImageAlt="map" strength={500}>
           <div class="box">
            <h1 class="paralaxtext">Smithsonian</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>
     <div class="divContent">
     <div>
     <h1 class="title" color="#D6BA8A">Smithsonians</h1>
             <h2 color="#D6BA8A">Policies/Prohibited Items</h2>
                  <p>Still and video photography is permitted for noncommercial use in the museums and exhibitions, unless otherwise posted. The use of tripods, monopods, or selfie sticks in the museums and gardens is strictly prohibited.</p>
                  <p>Smoking is prohibited in all Smithsonian facilities.</p>
                  <p>Strollers are permitted in all museums*; a limited number of strollers are available for rent at the Zoo.</p>
                  <p>Service animals are welcome in the museums and the National Zoo. Pets are not permitted.</p>
                  <p><i>Some museums require visitors and/or bags to go through metal detectors or x-ray screenings. Please refer to the specific museum bellow to determine their policies. Those who are unable to go through the metal detector will be hand-screened with an electronic wand by security personnel.</i></p>
              <h2 color="#D6BA8A"><b>While on Smithsonian Property</b></h2>
                        <p>Do not Carry firearms, other dangerous or deadly weapons, or explosives, either openly or concealed on the premises. The prohibition on firearms applies to all visitors, including those with firearm permits, but not to active law enforcement personnel authorized to carry firearms. Note: Kirpans (ceremonial knives) are religious articles of faith often worn by Sikhs. These knives are permitted in the museums as long as the blades are 2.5 inches or less in length, consistent with federal law (18 USC 930)</p>
                        <p>Do not Display or carry placards, signs, or banners</p>
                        <p>Do not Destroy, damage, or remove property</p>
                        <p>Do not Climb upon any part of a building</p>
                        <p>Do not Use loud, abusive, or otherwise improper language</p>
                        <p>Do not Loiter, sleep, or participate in unwarranted assembpes</p>
                        <p>Do not Create any hazard to persons or things</p>
                        <p>Do not Perform obscene or indecent acts</p>
                        <p>Do not Engage in disorderly conduct</p>
                        <p>Do not Use, possess, or sell illegal drugs</p>
                        <p>Do not Bring dogs or other animals, other than service animals</p>
                        <p>Do not Take photographs for advertising or any other commercial purpose</p>
                        <p>Do not Solicit for commercial or charitable purposes or distribute advertisements, pamphlets, handbills, and flyers</p>
             <h2 color="#D6BA8A"><b>Museums</b></h2>
	    <p><b><i>African American Museum</i></b></p>
             	  <p><b>Address: </b>1400 Constitution Ave NW, Washington, DC</p>
                  <p><b>Hours: </b>10 a.m. - 5:30 p.m.</p>
                  <p><i>Visitors are required to walk through a metal detector.</i></p>
                  <p><i>Bags are required to be screened via x-ray machine.</i></p>
             <hr/>
             <p><b><i>African Art Museum</i></b></p>
             
                  <p><b>Address: </b>950 Independence Avenue, SW Washington, DC</p>
                  <p><b>Hours: </b>10 a.m. - 5:30 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Air and Space Museum</i></b></p>
             
                  <p><b>Address: </b>Independence Avenue and 6th Street, SW Washington, DC</p>
                  <p><b>Hours: </b>10 a.m. - 5:30 p.m.</p>
                  <p><i>Visitors are required to walk through a metal detector.</i></p>
                  <p><i>Bags are required to be screened via x-ray machine.</i></p>
             <hr/>
             <p><b><i>Air and Space Museum Udvar-Hazy Center</i></b></p>
             
                  <p><b>Address: </b>14390 Air and Space Museum Parkway, Chantilly, VA</p>
                  <p><b>Hours: </b>10 a.m. - 5:30 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>American Art Museum</i></b></p>
             
                  <p><b>Address: </b>8th and F Streets, NW Washington, DC</p>
                  <p><b>Hours: </b>11:30 a.m. - 7:00 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>American History Museum</i></b></p>
             
                  <p><b>Address: </b>14th Street and Constitution Avenue, NW Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:30 p.m.</p>
                  <p><i>Visitors are required to walk through a metal detector.</i></p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>American Indian Museum</i></b></p>
             
                  <p><b>Address: </b>4th Street  and Independence Avenue, SW Washington, DC</p>
                  <p><b>Hours: </b>10 a.m. - 5:30 p.m.</p>
                  <p><i>Visitors are required to walk through a metal detector.</i></p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Anacostia Community Museum</i></b></p>
             
                  <p><b>Address: </b>1901 Fort Place SE Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:00 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Archives of American Art</i></b></p>
             
                  <p><b>Address: </b>8th and F Streets, NW Washington, DC</p>
                  <p><b>Hours: </b>11:30 a.m. - 7:00 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Freer Gallery of Art</i></b></p>
             
                  <p><b>Address: </b>Jefferson Drive and 12th Street, SW Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:30 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Hirshhorn</i></b></p>
             
                  <p><b>Address: </b>Independence Avenue at 7th Street, SW Washington, DC</p>
                  <p><b>Hours:</b></p>
                  
                        <p><b>Museum: </b>10 a.m. - 5:30 p.m.</p>
                        <p><b>Plaza: </b>7:30 a.m. - 5:30 p.m.</p>
                        <p><b>Sculpture Garden: </b>7:30 a.m. - dusk</p>
                  
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>National Zoo</i></b></p>
             
                  <p><b>Address: </b>3001 Connecticut Ave., NW Washington, DC</p>
                  <p><b>Hours:</b></p>
                  
                        <p>9 a.m. - 6 p.m. daily</p>
                        <p>Grounds 8 a.m. - 7 p.m.</p>
                        <p>(Weather permitting)</p>
                  
                  <p><i>All bags will be checked by hand.</i></p>
                  <p><b>In addition to the above, while on Zoo premises, NO VISITOR SHALL:</b></p>
                  
                        <p>Kill, injure, or disturb any exhibit or research animal by any means except to secure personal safety</p>
                        <p>Pet, attempt to pet, handle, move, or remove exhibit or research animals</p>
                        <p>Feed exhibit or research animals, except in strict accordance with authorized signs</p>
                        <p>Catch, attempt to catch, trap, remove, or kill any free roaming animals inhabiting the premises</p>
                        <p>Go over, under, between, or otherwise cross any guardrail, fence, moat, wall, or any other safety barrier</p>
                        <p>Seat, stand, or hold children over any safety barrier</p>
                        <p>Throw or toss rocks, or any other missiles into, from, or while on premises</p>
                        <p>Bring strollers, baby carriages, or other conveyances, except wheel chairs, into exhibit buildings and public restrooms</p>
                        <p>Engage in ball games, or any athletic activity, except in places as may be officially designated for such purposes</p>
                        <p>Smoke or carry lighted cigarettes, cigars, or pipes into exhibit buildings, or to have a fire of any kind on the premises</p>
                        <p>Damage, deface, pick, or remove any herb, shrub, bush, tree, or turf, or portion thereof</p>
                 <hr/> 
             
             <p><b><i>Natural History Museum</i></b></p>
             
                  <p><b>Address: </b>10th Street and Constitution Avenue, NW Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:30 p.m.</p>
                  <p><i>Visitors are required to walk through a metal detector.</i></p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Portrait Gallery</i></b></p>
             
                  <p><b>Address: </b>8th and F Streets, NW Washington, DC</p>
                  <p><b>Hours: </b>11:30 a.m. - 7:00 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Postal Museum</i></b></p>
             
                  <p><b>Address: </b>2 Massachusetts Avenue, NE Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:30 p.m.</p>
                  <p><i>Visitors are required to walk through a metal detector.</i></p>
                  <p><i>Bags are required to be screened via x-ray machine.</i></p>
             <hr/>
             <p><b><i>Renwick Gallery</i></b></p>
             
                  <p><b>Address: </b>1661 Pennsylvania Avenue, NW Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:30 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
                  <p><b>*Note: </b>Strollers currently are not permitted in the Renwick galleries on Friday, Saturday and Sunday; holidays; and at other times when the galleries are especially crowded. Stroller parking is available at the 17th Street accessible entrance. This temporary measure is to protect the artworks.</p>
             <hr/>
             <p><b><i>S. Dillon Ripley Center</i></b></p>
             
                  <p><b>Address: </b>1100 Jefferson Drive, SW Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:30 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Sackler Gallery</i></b></p>
             
                  <p><b>Address: </b>1050 Independence Avenue, SW Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:30 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Smithsonian Castle</i></b></p>
             
                  <p><b>Address: </b>1000 Jefferson Drive, SW Washington, DC</p>
                  <p><b>Hours: </b>8:30 a.m. - 5:30 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Smithsonian Gardens</i></b></p>
             
                  <p><b>Address: </b>Smithsonian museum grounds Washington, DC</p>
                  <p><b>Hours: </b>Haupt Garden open daily dawn to dusk; all others open 24 hours</p>
             <hr/>
             <p><b><i>United States Holocaust Memorial Museum</i></b></p>
             
                  <p><b>Address: </b>100 Raoul Wallenberg Pl SW, Washington, DC 20024</p>
                  <p><b>Hours: </b>10 a.m. - 5:20 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
    <br/><br/><br/></div>
    <img class="Logo" src={Logo} />
    </div>
    <br/></div>
);

const memorialsWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>2020 National Leadership Conference</h1>
    </header>
    <Link to="/home"><button class="home">🏠 Home</button></Link>
    <Popup className="popup" trigger={<Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>} position="bottom center" on="hover">
    <Link to="/smithsonian"><button class="smithsonian">Smithsonians</button></Link>
    <Link to="/memorials"><button class="smithsonian">Memorials</button></Link>
    <Link to="/government"><button class="smithsonian">Government</button></Link>
  </Popup>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
  <br/>
    <Parallax blur={10} bgImage={require('./whitehouse.JPG')} bgImageAlt="map" strength={500}>
           <div class="box">
            <h1 class="paralaxtext">Memorials</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>
     <div class="divContent">
     <div>
     <h1 class="title" color="#D6BA8A">Memorials/Monuments</h1>
     <h2 class="h2ul" color="#D6BA8A">Arlington National Cemetery</h2>
     <p><b><i>Women in Military Service for America Memorial</i></b></p>
            
                   <p><b>Address: </b>Memorial Ave & Schley Dr, Arlington, VA 22202</p>
                   <p><b>Hours: </b>8am – 5pm</p>
            <hr/>
            <p><b><i>Arlington House (Robert E Lee Memorial)</i></b></p>
            
                   <p><b>Address: </b>321 Sherman Dr, Fort Myer, VA 22211</p>
                   <p><b>Hours: </b>CLOSED FOR REHABILITATION</p>
            <hr/>
            <p><b><i>Tomb of the Unknowns</i></b></p>
            
                   <p><b>Address: </b>1 Wilson Ave, Fort Myer, VA 22211</p>
                   <p><b>Hours: </b>8a.m. - 5p.m.</p>
            <hr/>
            <p><b><i>U.S. Marine Corps War Memorial (Iwo Jima Memorial)</i></b></p>
            
                   <p><b>Address: </b>Iwo Jima Memorial Access Rd, Arlington, United States</p>
                   <p><b>Hours: </b>6 a.m. - 12 a.m.</p>
      <h2 class="h2ul" color="#D6BA8A">Tidal Basin</h2>
      <p><b><i>Thomas Jefferson Memorial</i></b></p>
            
                   <p><b>Address: </b>701 E Basin Dr SW, Washington, DC 20242</p>
                   <p><b>Hours: </b>Open 24/7</p>
            <hr/>
            <p><b><i>Franklin Delano Roosevelt Memorial</i></b></p>
            
                   <p><b>Address: </b>1850 West Basin Dr SW, Washington, DC 20242</p>
                   <p><b>Hours: </b>Open 24/7</p>
            <hr/>
            <p><b><i>Martin Luther King, Jr. Memorial</i></b></p>
            
                   <p><b>Address: </b>1850 West Basin Dr SW, Washington, DC 20242</p>
                   <p><b>Hours: </b>Open 24/7</p>
      <h2 class="h2ul" color="#D6BA8A">National Mall</h2>
      <p><b><i>Lincoln Memorial</i></b></p>
            
                   <p><b>Address: </b>2 Lincoln Memorial Cir NW, Washington, DC 20037</p>
                   <p><b>Hours: </b>Open 24/7</p>
            <hr/>
            <p><b><i>Korean War Veterans Memorial</i></b></p>
            
                   <p><b>Address: </b>1964 Independence Ave SW, Washington, DC 20024</p>
                   <p><b>Hours: </b>Open 24/7</p>
            <hr/>
            <p><b><i>Vietnam Veterans Memorial</i></b></p>
            
                   <p><b>Address: </b>5 Henry Bacon Dr SW, Washington, DC 20007</p>
                   <p><b>Hours: </b>Open 24/7</p>
            <hr/>
            <p><b><i>Constitutional Gardens</i></b></p>
        
                   <p><b>Address: </b>Constitution Ave NW, Washington, DC 20024</p>
                   <p><b>Hours: </b>Open 24/7</p>
            <hr/>
            <p><b><i>World War II Memorial</i></b></p>
            
                   <p><b>Address: </b>1750 Independence Ave SW, Washington, DC 20024</p>
                   <p><b>Hours: </b>Open 24/7</p>
            <hr/>
            <p><b><i>Washington Monument</i></b></p>
            
                   <p><b>Address: </b>2 15th St NW, Washington, DC 20024</p>
                   <p><b>Hours: </b>9a.m. - 10p.m.</p>
            <hr/>
            <p><b><i>The American Veterans Disabled for Life Memorial</i></b></p>
            
                   <p><b>Address: </b>150 Washington Ave SW, Washington, DC 20024</p>
                   <p><b>Hours: </b>Open 24/7</p>
    <br/><br/><br/></div>
    <img class="Logo" src={Logo} />
    </div>
    <br/></div>
);

const governmentWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>2020 National Leadership Conference</h1>
    </header>
    <Link to="/home"><button class="home">🏠 Home</button></Link>
    <Popup className="popup" trigger={<Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>} position="bottom center" on="hover">
    <Link to="/smithsonian"><button class="smithsonian">Smithsonians</button></Link>
    <Link to="/memorials"><button class="smithsonian">Memorials</button></Link>
    <Link to="/government"><button class="smithsonian">Government</button></Link>
  </Popup>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
  <br/>
    <Parallax blur={10} bgImage={require('./whitehouse.JPG')} bgImageAlt="map" strength={500}>
           <div class="box">
            <h1 class="paralaxtext">Government</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>
     <div class="divContent">
     <div>
     <h1 class="title" color="#D6BA8A">Government Buildings</h1>
    <p align="center"><i>Please be respectful of the appropriate etiquette at all times when on government grounds. Remember when at NLC you are not only representing your state and the national organization, but also yourself.</i></p>
    <h2 class="attractionHeaders"><b><i>United States Capital Building</i></b></h2>
            
                   <p><a href="https://www.visitthecapitol.gov/" rel="nofollow" target="_blank">Capital Building Website</a></p>
                   <p><b>Address: </b>First St NE, Washington, DC 20515</p>
                   <p><b>Hours: </b>Monday - Saturday: 8:30a.m. - 4:30p.m.</p>
                   <p><b>Prohibited Items: </b></p>
                   
                          <p><i>Before entering the Capitol Visitor Center, all visitors are screened by a magnetometer and all items that are permitted inside the building are screened by an x-ray device.</i></p>
                          <p><i>The following items are strictly prohibited in the Capitol, including the Capitol Visitor Center:</i></p>
                          
                                <p>Liquid, including water</p>
                                <p>Food or beverages of any kind, including fruit and unopened packaged food</p>
                                <p>Aerosol containers</p>
                                <p>Non-aerosol spray (Prescriptions for medical needs are permitted.)</p>
                                <p>Any pointed object, e.g. knitting needles and letter openers (Pens and pencils are permitted.)</p>
                                <p>Any bag larger than 18" wide x 14" high x 8.5" deep</p>
                                <p>Electric stun guns, martial arts weapons or devices</p>
                                <p>Guns, replica guns, ammunition, and fireworks</p>
                                <p>Knives of any size</p>
                                <p>Mace and pepper spray</p>
                                <p>Razors and box cutters</p>
                         
                         <p><i>The following items are not allowed in the Senate and House Galleries:</i></p>
                         
                                <p>Battery-operated electronic devices (medical devices are permitted)</p>
                                <p>Cameras</p>
                                <p>Cans and bottles</p>
                                <p>Creams, lotions or perfume</p>
                                <p>Packages, briefcases, backpacks or suitcases</p>
                                <p>Strollers</p>
                                <p>Video recorders or any type of recording device</p>
                                <p><i>Each Gallery operates a checkstand where visitors may store these items securely while they are visiting that Gallery.</i></p>
                         
                  
                  <p><b>Tours: </b></p>
                  
                        <p><i>Advance reservations are recommended, but not required.</i></p>
                        <p>Small groups (of 15 and fewer people) can <a href="https://tours.visitthecapitol.gov/cvc#.WqlNZijwaHs" rel="nofollow" target="_blank">click here</a> to create an account and reserve a tour date and time. <i>Reservations are available 90 days in advance.</i></p>
                        <p>Tour services and organizations with groups of more than 15 participants should <a href="https://tours.visitthecapitol.gov/CVC/#.WqlNzyjwaHs" rel="nofollow" target="_blank">click here</a> to access the group section of the online reservation system. <i>Reservations for groups become available 120 days in advance.</i></p>
                        <p>Same-day passes are available at the Information Desks located on the lower level of the Visitor Center. During spring, summer and some holiday periods, the availability of same-day tour passes may be limited. There may be a wait to acquire passes. <i>Please plan accordingly and arrive early, if possible.</i></p>
                  <hr/>
            <h2 class="attractionHeaders"><b><i>White House</i></b></h2>
            
                   <p><a href="https://www.whitehouse.gov/about-the-white-house/tours-events/" rel="nofollow" target="_blank">White House Tour Page</a></p>
                   <p><b>Address: </b>1600 Pennsylvania Ave NW, Washington, DC 20500</p>
                   <p><b>Hours: </b>Tuesday-Thursday: 7:30-11:30a.m., Friday-Saturday: 7:30a.m.-1:30p.m.</p>
                   <p><b>Prohibited Items: </b></p>
                   
                          <p><i>Before entering the White House, all visitors are screened by a magnetometer and all items that are permitted inside the building are screened by an x-ray device.</i></p>
                          <p><i>Prohibited items include, but are not limited to, the following:</i></p>
                          
                              <p>Video Recorders</p>
                              <p>Handbags, book bags, backpacks or purses</p>
                              <p>Food or beverages, tobacco products, personal grooming items (i.e. makeup, lotion, etc.)</p>
                              <p>Strollers</p>
                              <p>Any pointed objects</p>
                              <p>Aerosol containers</p>
                              <p>Guns, ammunition, fireworks, electric stun guns, mace, martial arts weapons/devices, or knives of any size</p>
                         
                         <p>Smartphones and compact cameras with a lens no longer than 3 inches (stills only) are permitted on the public tour route as long as their use does not interfere with other guests’ enjoyment of the tour.</p>
						 <p>Video cameras including any action camcorders, cameras with detachable lenses, tablets, tripods, monopods and camera sticks are not permitted.</p>
						 <p>Flash photography or live stream as well as talking or texting on cellular phones is not permitted while on the tour.</p>
						 <p>The U.S. Secret Service reserves the right to prohibit any other personal items. Umbrellas, wallets, car keys, and cell phones (including those with cameras) are permitted. However, guests will not be allowed to use cell phones inside the White House. Phones used inside the White House may be confiscated by US Secret Service.</p>
						 <p>Please note that no storage facilities are available on or around the complex. Individuals who arrive with prohibited items will not be permitted to enter the White House.</p>
                  
                  <p><b>Tours: </b></p>
                  
                    <p><i>Public tour requests MUST be submitted through one’s Member of Congress.</i></p>
                    <p>Tours are scheduled on a first come, first served basis.</p>
                    <p>Requests can be submitted up to three months in advance and no less than 21 days in advance. You are encouraged to submit your request as early as possible as a limited number of spaces are available.</p>
                    <p><i>All White House tours are free of charge.</i></p>
                    <p>All guests 18 years of age or older will be required to present a valid, government-issued photo identification</p>
                    
                          <p>Valid government-issued United States identification card (e.g. drivers license, military ID, etc.)</p>
                          <p>Valid United States or other official government-issued passports</p>
		<hr/>
	<h2 class="attractionHeaders"><b><i>Supreme Court</i></b></h2>
            
                   <p><a href="https://www.supremecourt.gov/visiting/visiting.aspx" rel="nofollow" target="_blank">Supreme Court Tour Page</a></p>
                   <p><b>Address: </b>1 First St NE, Washington, DC 20543</p>
                   <p><b>Hours: </b>Monday – Friday: 9 a.m. – 4:30 p.m., Closed on Saturday and Sunday</p>
                   <p><b>Prohibited Items: </b></p>
                   
						  <p>Be prepared to pass through security screening at your point of entry. To enter the building efficiently, please ask students to carry as little as possible on the day of their visit (backpacks, bags, etc.). All items are screened in x-ray machines and all visitors will be asked to pass through metal detectors.</p>
                          <p><i>The Supreme Court is the highest court in the nation for all cases and controversies arising under the Constitution or laws of the United States; therefore, visitors are asked to follow a few general guidelines:</i></p>
                          
                              <p>Be prepared to pass through security screening at your point of entry. All items must be screened in x-ray machines and all visitors will be asked to pass through metal detectors.</p>
                              <p>Please tour the building quietly, as working offices are adjacent to public hallways.</p>
                              <p>No photography or audio/video recording is allowed inside the Courtroom.</p>
                              <p>Smoking is prohibited inside the building.</p>
                              <p>Consumption of food and beverages is permitted only in the Cafeteria and vending machine alcove.</p>
                              <p>Touching of portraits, busts, or other artifacts on exhibit is strictly prohibited.</p>
                              <p>Any visitors unable to maintain proper behavior will be asked to leave by the Supreme Court Police.</p>
                         
                  
                  <p><b>Tours: </b></p>
                  
                    <p><i>The Supreme Court does not offer guided walking tours,</i> visitors are encouraged to tour public portions of the building on a self-guided basis and take advantage of a variety of educational programs, including Courtroom Lectures, a Visitor Film, and court-related Exhibitions. In addition to the Courtroom, portions of the first and ground floors are open to the public. Highlights include the John Marshall statue, portraits and busts of former Justices, and two self-supporting marble staircases. The Courtroom is located on the first floor.</p>
                    <p>Court sessions, including handing down of opinions are also open to the public. Courtroom seating is on a first-come, first-served basis. Visitors should be aware that the business of the Court may from time to time affect public access to the building or alter programming offered.</p>
                  
    <br/><br/><br/></div>
    <img class="Logo" src={Logo} />
    </div>
    <br/></div>
);

const transportWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>2020 National Leadership Conference</h1>
    </header>
    <Link to="/home"><button class="home">🏠 Home</button></Link>
    <Popup className="popup" trigger={<Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>} position="bottom center" on="hover">
    <Link to="/smithsonian"><button class="smithsonian">Smithsonians</button></Link>
    <Link to="/memorials"><button class="smithsonian">Memorials</button></Link>
    <Link to="/government"><button class="smithsonian">Government</button></Link>
  </Popup>
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
    <Popup className="popupImage" modal={true} closeOnEscape={true} repositionOnResize={true} keepTooltipInside={false}  trigger={<img class="Metro" src={Metro} />} position="center center" on="click">
     <img class="popupMetro" src={Metro} />
    </Popup>
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
    <Popup className="popupImage" modal={true} closeOnEscape={true} repositionOnResize={true} keepTooltipInside={false}  trigger={<img class="Metro" src={BlueLoop} />} position="center center" on="click">
    <img class="popupMetro" src={BlueLoop} />
    </Popup>
    <h2 class="h1Content">Red Loop</h2>
    <Popup className="popupImage" modal={true} closeOnEscape={true} repositionOnResize={true} keepTooltipInside={false}  trigger={<img class="Metro" src={RedLoop} />} position="center center" on="click">
    <img class="popupMetro" src={RedLoop} />
    </Popup>
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
    <Popup className="popup" trigger={<Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>} position="bottom center" on="hover">
    <Link to="/smithsonian"><button class="smithsonian">Smithsonians</button></Link>
    <Link to="/memorials"><button class="smithsonian">Memorials</button></Link>
    <Link to="/government"><button class="smithsonian">Government</button></Link>
  </Popup>
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
    <Popup className="popup" trigger={<Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>} position="bottom center" on="hover">
    <Link to="/smithsonian"><button class="smithsonian">Smithsonians</button></Link>
    <Link to="/memorials"><button class="smithsonian">Memorials</button></Link>
    <Link to="/government"><button class="smithsonian">Government</button></Link>
  </Popup>
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
     <div>
     <h1 class="title" color="#D6BA8A">Smithsonians</h1>
             <h2 color="#D6BA8A">Policies/Prohibited Items</h2>
                  <p>Still and video photography is permitted for noncommercial use in the museums and exhibitions, unless otherwise posted. The use of tripods, monopods, or selfie sticks in the museums and gardens is strictly prohibited.</p>
                  <p>Smoking is prohibited in all Smithsonian facilities.</p>
                  <p>Strollers are permitted in all museums*; a limited number of strollers are available for rent at the Zoo.</p>
                  <p>Service animals are welcome in the museums and the National Zoo. Pets are not permitted.</p>
                  <p><i>Some museums require visitors and/or bags to go through metal detectors or x-ray screenings. Please refer to the specific museum bellow to determine their policies. Those who are unable to go through the metal detector will be hand-screened with an electronic wand by security personnel.</i></p>
              <h2 color="#D6BA8A"><b>While on Smithsonian Property</b></h2>
                        <p>Do not Carry firearms, other dangerous or deadly weapons, or explosives, either openly or concealed on the premises. The prohibition on firearms applies to all visitors, including those with firearm permits, but not to active law enforcement personnel authorized to carry firearms. Note: Kirpans (ceremonial knives) are religious articles of faith often worn by Sikhs. These knives are permitted in the museums as long as the blades are 2.5 inches or less in length, consistent with federal law (18 USC 930)</p>
                        <p>Do not Display or carry placards, signs, or banners</p>
                        <p>Do not Destroy, damage, or remove property</p>
                        <p>Do not Climb upon any part of a building</p>
                        <p>Do not Use loud, abusive, or otherwise improper language</p>
                        <p>Do not Loiter, sleep, or participate in unwarranted assembpes</p>
                        <p>Do not Create any hazard to persons or things</p>
                        <p>Do not Perform obscene or indecent acts</p>
                        <p>Do not Engage in disorderly conduct</p>
                        <p>Do not Use, possess, or sell illegal drugs</p>
                        <p>Do not Bring dogs or other animals, other than service animals</p>
                        <p>Do not Take photographs for advertising or any other commercial purpose</p>
                        <p>Do not Solicit for commercial or charitable purposes or distribute advertisements, pamphlets, handbills, and flyers</p>
             <h2 color="#D6BA8A"><b>Museums</b></h2>
	    <p><b><i>African American Museum</i></b></p>
             	  <p><b>Address: </b>1400 Constitution Ave NW, Washington, DC</p>
                  <p><b>Hours: </b>10 a.m. - 5:30 p.m.</p>
                  <p><i>Visitors are required to walk through a metal detector.</i></p>
                  <p><i>Bags are required to be screened via x-ray machine.</i></p>
             <hr/>
             <p><b><i>African Art Museum</i></b></p>
             
                  <p><b>Address: </b>950 Independence Avenue, SW Washington, DC</p>
                  <p><b>Hours: </b>10 a.m. - 5:30 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Air and Space Museum</i></b></p>
             
                  <p><b>Address: </b>Independence Avenue and 6th Street, SW Washington, DC</p>
                  <p><b>Hours: </b>10 a.m. - 5:30 p.m.</p>
                  <p><i>Visitors are required to walk through a metal detector.</i></p>
                  <p><i>Bags are required to be screened via x-ray machine.</i></p>
             <hr/>
             <p><b><i>Air and Space Museum Udvar-Hazy Center</i></b></p>
             
                  <p><b>Address: </b>14390 Air and Space Museum Parkway, Chantilly, VA</p>
                  <p><b>Hours: </b>10 a.m. - 5:30 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>American Art Museum</i></b></p>
             
                  <p><b>Address: </b>8th and F Streets, NW Washington, DC</p>
                  <p><b>Hours: </b>11:30 a.m. - 7:00 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>American History Museum</i></b></p>
             
                  <p><b>Address: </b>14th Street and Constitution Avenue, NW Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:30 p.m.</p>
                  <p><i>Visitors are required to walk through a metal detector.</i></p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>American Indian Museum</i></b></p>
             
                  <p><b>Address: </b>4th Street  and Independence Avenue, SW Washington, DC</p>
                  <p><b>Hours: </b>10 a.m. - 5:30 p.m.</p>
                  <p><i>Visitors are required to walk through a metal detector.</i></p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Anacostia Community Museum</i></b></p>
             
                  <p><b>Address: </b>1901 Fort Place SE Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:00 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Archives of American Art</i></b></p>
             
                  <p><b>Address: </b>8th and F Streets, NW Washington, DC</p>
                  <p><b>Hours: </b>11:30 a.m. - 7:00 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Freer Gallery of Art</i></b></p>
             
                  <p><b>Address: </b>Jefferson Drive and 12th Street, SW Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:30 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Hirshhorn</i></b></p>
             
                  <p><b>Address: </b>Independence Avenue at 7th Street, SW Washington, DC</p>
                  <p><b>Hours:</b></p>
                  
                        <p><b>Museum: </b>10 a.m. - 5:30 p.m.</p>
                        <p><b>Plaza: </b>7:30 a.m. - 5:30 p.m.</p>
                        <p><b>Sculpture Garden: </b>7:30 a.m. - dusk</p>
                  
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>National Zoo</i></b></p>
             
                  <p><b>Address: </b>3001 Connecticut Ave., NW Washington, DC</p>
                  <p><b>Hours:</b></p>
                  
                        <p>9 a.m. - 6 p.m. daily</p>
                        <p>Grounds 8 a.m. - 7 p.m.</p>
                        <p>(Weather permitting)</p>
                  
                  <p><i>All bags will be checked by hand.</i></p>
                  <p><b>In addition to the above, while on Zoo premises, NO VISITOR SHALL:</b></p>
                  
                        <p>Kill, injure, or disturb any exhibit or research animal by any means except to secure personal safety</p>
                        <p>Pet, attempt to pet, handle, move, or remove exhibit or research animals</p>
                        <p>Feed exhibit or research animals, except in strict accordance with authorized signs</p>
                        <p>Catch, attempt to catch, trap, remove, or kill any free roaming animals inhabiting the premises</p>
                        <p>Go over, under, between, or otherwise cross any guardrail, fence, moat, wall, or any other safety barrier</p>
                        <p>Seat, stand, or hold children over any safety barrier</p>
                        <p>Throw or toss rocks, or any other missiles into, from, or while on premises</p>
                        <p>Bring strollers, baby carriages, or other conveyances, except wheel chairs, into exhibit buildings and public restrooms</p>
                        <p>Engage in ball games, or any athletic activity, except in places as may be officially designated for such purposes</p>
                        <p>Smoke or carry lighted cigarettes, cigars, or pipes into exhibit buildings, or to have a fire of any kind on the premises</p>
                        <p>Damage, deface, pick, or remove any herb, shrub, bush, tree, or turf, or portion thereof</p>
                 <hr/> 
             
             <p><b><i>Natural History Museum</i></b></p>
             
                  <p><b>Address: </b>10th Street and Constitution Avenue, NW Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:30 p.m.</p>
                  <p><i>Visitors are required to walk through a metal detector.</i></p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Portrait Gallery</i></b></p>
             
                  <p><b>Address: </b>8th and F Streets, NW Washington, DC</p>
                  <p><b>Hours: </b>11:30 a.m. - 7:00 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Postal Museum</i></b></p>
             
                  <p><b>Address: </b>2 Massachusetts Avenue, NE Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:30 p.m.</p>
                  <p><i>Visitors are required to walk through a metal detector.</i></p>
                  <p><i>Bags are required to be screened via x-ray machine.</i></p>
             <hr/>
             <p><b><i>Renwick Gallery</i></b></p>
             
                  <p><b>Address: </b>1661 Pennsylvania Avenue, NW Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:30 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
                  <p><b>*Note: </b>Strollers currently are not permitted in the Renwick galleries on Friday, Saturday and Sunday; holidays; and at other times when the galleries are especially crowded. Stroller parking is available at the 17th Street accessible entrance. This temporary measure is to protect the artworks.</p>
             <hr/>
             <p><b><i>S. Dillon Ripley Center</i></b></p>
             
                  <p><b>Address: </b>1100 Jefferson Drive, SW Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:30 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Sackler Gallery</i></b></p>
             
                  <p><b>Address: </b>1050 Independence Avenue, SW Washington, DC</p>
                  <p><b>Hours: </b>10:00 a.m. - 5:30 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Smithsonian Castle</i></b></p>
             
                  <p><b>Address: </b>1000 Jefferson Drive, SW Washington, DC</p>
                  <p><b>Hours: </b>8:30 a.m. - 5:30 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
             <hr/>
             <p><b><i>Smithsonian Gardens</i></b></p>
             
                  <p><b>Address: </b>Smithsonian museum grounds Washington, DC</p>
                  <p><b>Hours: </b>Haupt Garden open daily dawn to dusk; all others open 24 hours</p>
             <hr/>
             <p><b><i>United States Holocaust Memorial Museum</i></b></p>
             
                  <p><b>Address: </b>100 Raoul Wallenberg Pl SW, Washington, DC 20024</p>
                  <p><b>Hours: </b>10 a.m. - 5:20 p.m.</p>
                  <p><i>All bags will be checked by hand.</i></p>
			  
     <h1 class="title" color="#D6BA8A">Memorials/Monuments</h1>
     <h2 class="h2ul" color="#D6BA8A">Arlington National Cemetery</h2>
     <p><b><i>Women in Military Service for America Memorial</i></b></p>
            
                   <p><b>Address: </b>Memorial Ave & Schley Dr, Arlington, VA 22202</p>
                   <p><b>Hours: </b>8am – 5pm</p>
            <hr/>
            <p><b><i>Arlington House (Robert E Lee Memorial)</i></b></p>
            
                   <p><b>Address: </b>321 Sherman Dr, Fort Myer, VA 22211</p>
                   <p><b>Hours: </b>CLOSED FOR REHABILITATION</p>
            <hr/>
            <p><b><i>Tomb of the Unknowns</i></b></p>
            
                   <p><b>Address: </b>1 Wilson Ave, Fort Myer, VA 22211</p>
                   <p><b>Hours: </b>8a.m. - 5p.m.</p>
            <hr/>
            <p><b><i>U.S. Marine Corps War Memorial (Iwo Jima Memorial)</i></b></p>
            
                   <p><b>Address: </b>Iwo Jima Memorial Access Rd, Arlington, United States</p>
                   <p><b>Hours: </b>6 a.m. - 12 a.m.</p>
      <h2 class="h2ul" color="#D6BA8A">Tidal Basin</h2>
      <p><b><i>Thomas Jefferson Memorial</i></b></p>
            
                   <p><b>Address: </b>701 E Basin Dr SW, Washington, DC 20242</p>
                   <p><b>Hours: </b>Open 24/7</p>
            <hr/>
            <p><b><i>Franklin Delano Roosevelt Memorial</i></b></p>
            
                   <p><b>Address: </b>1850 West Basin Dr SW, Washington, DC 20242</p>
                   <p><b>Hours: </b>Open 24/7</p>
            <hr/>
            <p><b><i>Martin Luther King, Jr. Memorial</i></b></p>
            
                   <p><b>Address: </b>1850 West Basin Dr SW, Washington, DC 20242</p>
                   <p><b>Hours: </b>Open 24/7</p>
      <h2 class="h2ul" color="#D6BA8A">National Mall</h2>
      <p><b><i>Lincoln Memorial</i></b></p>
            
                   <p><b>Address: </b>2 Lincoln Memorial Cir NW, Washington, DC 20037</p>
                   <p><b>Hours: </b>Open 24/7</p>
            <hr/>
            <p><b><i>Korean War Veterans Memorial</i></b></p>
            
                   <p><b>Address: </b>1964 Independence Ave SW, Washington, DC 20024</p>
                   <p><b>Hours: </b>Open 24/7</p>
            <hr/>
            <p><b><i>Vietnam Veterans Memorial</i></b></p>
            
                   <p><b>Address: </b>5 Henry Bacon Dr SW, Washington, DC 20007</p>
                   <p><b>Hours: </b>Open 24/7</p>
            <hr/>
            <p><b><i>Constitutional Gardens</i></b></p>
        
                   <p><b>Address: </b>Constitution Ave NW, Washington, DC 20024</p>
                   <p><b>Hours: </b>Open 24/7</p>
            <hr/>
            <p><b><i>World War II Memorial</i></b></p>
            
                   <p><b>Address: </b>1750 Independence Ave SW, Washington, DC 20024</p>
                   <p><b>Hours: </b>Open 24/7</p>
            <hr/>
            <p><b><i>Washington Monument</i></b></p>
            
                   <p><b>Address: </b>2 15th St NW, Washington, DC 20024</p>
                   <p><b>Hours: </b>9a.m. - 10p.m.</p>
            <hr/>
            <p><b><i>The American Veterans Disabled for Life Memorial</i></b></p>
            
                   <p><b>Address: </b>150 Washington Ave SW, Washington, DC 20024</p>
                   <p><b>Hours: </b>Open 24/7</p>

    <h1 class="title" color="#D6BA8A">Government Buildings</h1>
    <p align="center"><i>Please be respectful of the appropriate etiquette at all times when on government grounds. Remember when at NLC you are not only representing your state and the national organization, but also yourself.</i></p>
    <h2 class="attractionHeaders"><b><i>United States Capital Building</i></b></h2>
            
                   <p><a href="https://www.visitthecapitol.gov/" rel="nofollow" target="_blank">Capital Building Website</a></p>
                   <p><b>Address: </b>First St NE, Washington, DC 20515</p>
                   <p><b>Hours: </b>Monday - Saturday: 8:30a.m. - 4:30p.m.</p>
                   <p><b>Prohibited Items: </b></p>
                   
                          <p><i>Before entering the Capitol Visitor Center, all visitors are screened by a magnetometer and all items that are permitted inside the building are screened by an x-ray device.</i></p>
                          <p><i>The following items are strictly prohibited in the Capitol, including the Capitol Visitor Center:</i></p>
                          
                                <p>Liquid, including water</p>
                                <p>Food or beverages of any kind, including fruit and unopened packaged food</p>
                                <p>Aerosol containers</p>
                                <p>Non-aerosol spray (Prescriptions for medical needs are permitted.)</p>
                                <p>Any pointed object, e.g. knitting needles and letter openers (Pens and pencils are permitted.)</p>
                                <p>Any bag larger than 18" wide x 14" high x 8.5" deep</p>
                                <p>Electric stun guns, martial arts weapons or devices</p>
                                <p>Guns, replica guns, ammunition, and fireworks</p>
                                <p>Knives of any size</p>
                                <p>Mace and pepper spray</p>
                                <p>Razors and box cutters</p>
                         
                         <p><i>The following items are not allowed in the Senate and House Galleries:</i></p>
                         
                                <p>Battery-operated electronic devices (medical devices are permitted)</p>
                                <p>Cameras</p>
                                <p>Cans and bottles</p>
                                <p>Creams, lotions or perfume</p>
                                <p>Packages, briefcases, backpacks or suitcases</p>
                                <p>Strollers</p>
                                <p>Video recorders or any type of recording device</p>
                                <p><i>Each Gallery operates a checkstand where visitors may store these items securely while they are visiting that Gallery.</i></p>
                         
                  
                  <p><b>Tours: </b></p>
                  
                        <p><i>Advance reservations are recommended, but not required.</i></p>
                        <p>Small groups (of 15 and fewer people) can <a href="https://tours.visitthecapitol.gov/cvc#.WqlNZijwaHs" rel="nofollow" target="_blank">click here</a> to create an account and reserve a tour date and time. <i>Reservations are available 90 days in advance.</i></p>
                        <p>Tour services and organizations with groups of more than 15 participants should <a href="https://tours.visitthecapitol.gov/CVC/#.WqlNzyjwaHs" rel="nofollow" target="_blank">click here</a> to access the group section of the online reservation system. <i>Reservations for groups become available 120 days in advance.</i></p>
                        <p>Same-day passes are available at the Information Desks located on the lower level of the Visitor Center. During spring, summer and some holiday periods, the availability of same-day tour passes may be limited. There may be a wait to acquire passes. <i>Please plan accordingly and arrive early, if possible.</i></p>
                  <hr/>
            <h2 class="attractionHeaders"><b><i>White House</i></b></h2>
            
                   <p><a href="https://www.whitehouse.gov/about-the-white-house/tours-events/" rel="nofollow" target="_blank">White House Tour Page</a></p>
                   <p><b>Address: </b>1600 Pennsylvania Ave NW, Washington, DC 20500</p>
                   <p><b>Hours: </b>Tuesday-Thursday: 7:30-11:30a.m., Friday-Saturday: 7:30a.m.-1:30p.m.</p>
                   <p><b>Prohibited Items: </b></p>
                   
                          <p><i>Before entering the White House, all visitors are screened by a magnetometer and all items that are permitted inside the building are screened by an x-ray device.</i></p>
                          <p><i>Prohibited items include, but are not limited to, the following:</i></p>
                          
                              <p>Video Recorders</p>
                              <p>Handbags, book bags, backpacks or purses</p>
                              <p>Food or beverages, tobacco products, personal grooming items (i.e. makeup, lotion, etc.)</p>
                              <p>Strollers</p>
                              <p>Any pointed objects</p>
                              <p>Aerosol containers</p>
                              <p>Guns, ammunition, fireworks, electric stun guns, mace, martial arts weapons/devices, or knives of any size</p>
                         
                         <p>Smartphones and compact cameras with a lens no longer than 3 inches (stills only) are permitted on the public tour route as long as their use does not interfere with other guests’ enjoyment of the tour.</p>
						 <p>Video cameras including any action camcorders, cameras with detachable lenses, tablets, tripods, monopods and camera sticks are not permitted.</p>
						 <p>Flash photography or live stream as well as talking or texting on cellular phones is not permitted while on the tour.</p>
						 <p>The U.S. Secret Service reserves the right to prohibit any other personal items. Umbrellas, wallets, car keys, and cell phones (including those with cameras) are permitted. However, guests will not be allowed to use cell phones inside the White House. Phones used inside the White House may be confiscated by US Secret Service.</p>
						 <p>Please note that no storage facilities are available on or around the complex. Individuals who arrive with prohibited items will not be permitted to enter the White House.</p>
                  
                  <p><b>Tours: </b></p>
                  
                    <p><i>Public tour requests MUST be submitted through one’s Member of Congress.</i></p>
                    <p>Tours are scheduled on a first come, first served basis.</p>
                    <p>Requests can be submitted up to three months in advance and no less than 21 days in advance. You are encouraged to submit your request as early as possible as a limited number of spaces are available.</p>
                    <p><i>All White House tours are free of charge.</i></p>
                    <p>All guests 18 years of age or older will be required to present a valid, government-issued photo identification</p>
                    
                          <p>Valid government-issued United States identification card (e.g. drivers license, military ID, etc.)</p>
                          <p>Valid United States or other official government-issued passports</p>
		<hr/>
	<h2 class="attractionHeaders"><b><i>Supreme Court</i></b></h2>
            
                   <p><a href="https://www.supremecourt.gov/visiting/visiting.aspx" rel="nofollow" target="_blank">Supreme Court Tour Page</a></p>
                   <p><b>Address: </b>1 First St NE, Washington, DC 20543</p>
                   <p><b>Hours: </b>Monday – Friday: 9 a.m. – 4:30 p.m., Closed on Saturday and Sunday</p>
                   <p><b>Prohibited Items: </b></p>
                   
						  <p>Be prepared to pass through security screening at your point of entry. To enter the building efficiently, please ask students to carry as little as possible on the day of their visit (backpacks, bags, etc.). All items are screened in x-ray machines and all visitors will be asked to pass through metal detectors.</p>
                          <p><i>The Supreme Court is the highest court in the nation for all cases and controversies arising under the Constitution or laws of the United States; therefore, visitors are asked to follow a few general guidelines:</i></p>
                          
                              <p>Be prepared to pass through security screening at your point of entry. All items must be screened in x-ray machines and all visitors will be asked to pass through metal detectors.</p>
                              <p>Please tour the building quietly, as working offices are adjacent to public hallways.</p>
                              <p>No photography or audio/video recording is allowed inside the Courtroom.</p>
                              <p>Smoking is prohibited inside the building.</p>
                              <p>Consumption of food and beverages is permitted only in the Cafeteria and vending machine alcove.</p>
                              <p>Touching of portraits, busts, or other artifacts on exhibit is strictly prohibited.</p>
                              <p>Any visitors unable to maintain proper behavior will be asked to leave by the Supreme Court Police.</p>
                         
                  
                  <p><b>Tours: </b></p>
                  
                    <p><i>The Supreme Court does not offer guided walking tours,</i> visitors are encouraged to tour public portions of the building on a self-guided basis and take advantage of a variety of educational programs, including Courtroom Lectures, a Visitor Film, and court-related Exhibitions. In addition to the Courtroom, portions of the first and ground floors are open to the public. Highlights include the John Marshall statue, portraits and busts of former Justices, and two self-supporting marble staircases. The Courtroom is located on the first floor.</p>
                    <p>Court sessions, including handing down of opinions are also open to the public. Courtroom seating is on a first-come, first-served basis. Visitors should be aware that the business of the Court may from time to time affect public access to the building or alter programming offered.</p>

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
    <Popup className="popup" trigger={<Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>} position="bottom center" on="hover">
    <Link to="/smithsonian"><button class="smithsonian">Smithsonians</button></Link>
    <Link to="/memorials"><button class="smithsonian">Memorials</button></Link>
    <Link to="/government"><button class="smithsonian">Government</button></Link>
  </Popup>
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
    <Popup className="popup" trigger={<Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>} position="bottom center" on="hover">
    <Link to="/smithsonian"><button class="smithsonian">Smithsonians</button></Link>
    <Link to="/memorials"><button class="smithsonian">Memorials</button></Link>
    <Link to="/government"><button class="smithsonian">Government</button></Link>
  </Popup>
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
    <Popup className="popupImage" modal={true} closeOnEscape={true} repositionOnResize={true} keepTooltipInside={false}  trigger={<img class="Metro" src={Convention} />} position="center center" on="click">
    <img class="popupMetro" src={Convention} />
    </Popup>
    <br/><br/>
    <h2>Interactive Map</h2>
    <p><i>Use the following interactive map to explore the surrounding area.</i></p>
    <iframe class="hotel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.226301767285!2d-77.01896208465307!3d38.78144617958869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b0734d793d5d%3A0x7fccb753cbe0c4f7!2sGaylord+National+Resort+%26+Convention+Center%2C+Fort+Washington%2C+MD+20745!5e0!3m2!1sen!2sus!4v1541349162518" allowfullscreen></iframe>
    <br/><br/>
      <h2>Metro Map</h2>
      <p><i>Use this map to help you navigate the Metro System</i></p>
      <Popup className="popupImage" modal={true} closeOnEscape={true} repositionOnResize={true} keepTooltipInside={false}  trigger={<img class="Metro" src={Metro} />} position="center center" on="click">
    <img class="popupMetro" src={Metro} />
    </Popup>
      <h2>D.C. Hop-On Hop-Off Trolley Tour</h2>
      <p><i>Use this map to help you follow the Trolley Stops</i></p>
      <h3>Blue Loop</h3>
      <Popup className="popupImage" modal={true} closeOnEscape={true} repositionOnResize={true} keepTooltipInside={false}  trigger={<img class="Metro" src={BlueLoop} />} position="center center" on="click">
    <img class="popupMetro" src={BlueLoop} />
    </Popup>
      <h3>Red Loop</h3>
      <Popup className="popupImage" modal={true} closeOnEscape={true} repositionOnResize={true} keepTooltipInside={false}  trigger={<img class="Metro" src={RedLoop} />} position="center center" on="click">
    <img class="popupMetro" src={RedLoop} />
    </Popup>
      <br/>
      <br/>
      <img class="Logo" src={Logo} />
      </div>
      <br/>
      </div>
);
export default App;
