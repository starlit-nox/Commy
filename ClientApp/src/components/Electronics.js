import React from 'react';

class Electronics extends React.Component {
    render() {
        const imagesWithInfo = [
            { src: './imageProducts/electronics/apple-phone.jpg', info: 'A modern smartphone with all the bells and whistles.' },
            { src: './imageProducts/electronics/house-phone.jpg', info: 'A cordless phone for your house. It uses landline.' },
            { src: './imageProducts/electronics/mobile-phone.jpg', info: 'A vintage phone that is not very smart at all.' },
            //maybe items more
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {imagesWithInfo.map((item, index) => (
                    <div
                        key={index}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}
                    >
                        <img
                            src={item.src}
                            alt={`Model ${index + 1}`}
                            style={{ width: '200px', height: 'auto' }}
                        />
                        <p>{item.info}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Electronics;
