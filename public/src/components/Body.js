import React from 'react';

export default class Body extends React.Component{
    constructor(){
        super();
    }

    render (){
        return <div className="body">
            <b>Welcome To Ani Engineers</b><br />
            Anivarya Pumps is one of the leading Manufacturing firm in India for Gear Pump, Rotary Gear Pump, Helical Gear Pump, Stainless Steel, Liquid Pump, Lobe, Oil, Industrial Pumps and Pumping Systems. <br />
            Anivarya Pumps offers Heavy Duty Gear Pumps which is useful for pumping and transferring of heavy fuel oils. Generally made of iron Gear pump are also available in cast steel, stainless steel.<br /><br />
            
            <ul className="list-group">
                <li className="list-group-item">
                    <b>Heavy Duty Gear Pumps</b><br />
                    <div className="row">
                        <div className="col-md-3">
                            <img src="/img/heavydutygear.gif" className="display" />
                        </div>
                        <div className="col-md-9">
                            Heavy duty gear pumps are complete SS-136 investment cast construction with teflon coated or polymer bush and PTFE sealant. Suitable to handle acids, dyes, syrups and other corrosive chemicals.
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <b>Internal Gear Pumps</b><br />
                    <img src="/img/internalgear.gif" className="display" />
                    Internal gear pumps are fuel pressuring internal gear type pumps, for handling fuel oils in boilers and burners, heating and pumping systems. Built in pressure relief valve and capacity by-pass.<br /><br />
                </li>
                <li className="list-group-item">
                    <b>Helical Gear Pump</b><br />
                    <img src="/img/helicalgear.gif" className="display" />
                    Helical gear pump are useful for pumping and transfer of all viscous liquids, oils and petroleum products.<br /><br />
                </li>
                <li className="list-group-item">
                    <b>Flanged Mounted Gear Pumps</b><br />
                    <img src="/img/flangedmountedgear.gif" className="display" />
                    Flanged mounted gear pumps are modified version of SG series pumps with wider capacity range and facility for foot or flange mounting. Suitable for OEMS.<br /><br />
                </li>
                <li className="list-group-item">
                    <b>Stainless Steel Gear Pumps</b><br />
                    <img src="/img/ssgear.gif" className="display" />
                    SS Gear pumps are complete SS-136 investment cast construction with teflon coated or polymer bush and PTFE sealant. Suitable to handle acids, dyes, syrups and other corrosive chemicals.<br /><br />
                </li>
                <li className="list-group-item">
                    <b>Rotary Lobe Pumps</b><br />
                    <img src="/img/rotarylobe.gif" className="display" />
                    Rotary Lobe pumps are useful for all high viscous product. SS-316 pumping chamber. applicable for Food, Pharma, Paint & Sewage industries. Tri lobe design.<br /><br />
                </li>
                <li className="list-group-item">
                    <b>Pumping Systems</b><br />
                    <img src="/img/pumpingsys.gif" className="display" />
                    <ul>
                        <li>Useful for fuel oil loading and unloading</li>
                        <li>Pumping & Heating system</li>
                        <li>Force feed lubrication system</li>
                        <li>Circulation & cooling system</li>
                        <li>Pumping & filtration system</li>
                    </ul>
                </li>
            </ul>
        </div>
    }
}