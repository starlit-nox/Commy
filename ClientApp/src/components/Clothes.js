import React from 'react';

class Clothes extends React.Component {
    render() {
        const imagesWithInfo = [
            { src: './imageProducts/clothes/3socks.jpg', info: 'Socks.' },
            { src: './imageProducts/clothes/jeans.jpg', info: 'Jeans.' },
            { src: './imageProducts/clothes/winbreaker.png', info: 'Jacket.' },
            { src: './imageProducts/clothes/white-shirt-btie.jpg', info: 'Shirt.' },
            { src: './imageProducts/clothes/pink-c-shirt.jpg', info: 'Shirt.' },

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

export default Clothes;
