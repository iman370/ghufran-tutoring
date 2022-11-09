import React from 'react';

import graph1 from './../images/graph1.png';

function Proof() {
    return(
        <div id="proof-container">
            <div id="content1">
                <h1>Students using Active Recall outperform their Peers who don't.</h1>
                <h2>Active recall is using student materials in a way that <b>actively stimulates a child's brain</b>, and helps them put their newly learnt topics into long-term memory.</h2>
            </div>
            <div id="content2">
                <h2>Peer-reviewed studies only confirm what medical and engineering students have been using to graduate from their universities with First-Class degrees.</h2>
                <img className="image" src={graph1} alt="Active Recall Graph"/>
                <h2>Using proven techniques, I can coach your child to remember what is taught, by using Active Recall and repeating this multiple times over set periods, they'll remember more than their friends.</h2>
            </div>
        </div>
    )
}

export default Proof
