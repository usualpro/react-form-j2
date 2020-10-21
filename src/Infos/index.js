import React from 'react';
export const Infos = props => {
    const CountryInfoList = () => (props.currentCountry)
        ? <>
            {
                
                Object.keys(props.currentCountry).map(
                    (name, index) => <li key={index} className="list-group-item">
                        {name}:{JSON.stringify(props.currentCountry[name])}
                    </li>
                )
            }
        </>
        : null;
        
    return <div className='info-container container-fluid'>
        <ul className="list-group">
            <CountryInfoList />
        </ul>
    </div>;
};



<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>