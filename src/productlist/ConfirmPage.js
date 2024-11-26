import React from 'react';

function ConfirmPage({ cartProduct, setConfirmation }) {

    const handleClick = () => {
        setConfirmation((prev) => !prev);
    }

    return (
        <div className={`p-[24px] pt-[40px] bg-white rounded-[12px] space-y-[32px] flex flex-col fixed inset-0 top-[95px] z-50  mx-auto `}>
            <div className='space-y-[24px]'>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z" fill="#1EA575" />
                    <path d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z" fill="#1EA575" />
                </svg>
                <div>
                    <h1 className='text-[#260F08] font-bold text-[40px] font-Redhat '>Order Confirmed</h1>
                    <p className='text-[#87635A] font-normal text-[16px] font-Redhat'>We hope you enjoy your food!</p>
                </div>
            </div>

            <div className='bg-[#FCF8F6] px-[24px] divide-y rounded-[8px] '>
                {
                    cartProduct.map((product, index) => {
                        return (
                            <div key={product.name} className='flex items-center justify-between  py-[16px]'>
                                <div className='flex space-x-[16px] '>
                                    <img className='w-[48px] h-[48px]' src={product.thumbnail} alt={product.name}></img>
                                    <div>
                                        <p className='font-Redhat text-[#260F08] font-semibold text-[14px]'>{product.name}</p>
                                        <p className='space-x-[8px]'><span className='font-Redhat text-[#C73B0F]  font-semibold text-[14px]'>{product.qty}x  </span><span className='font-Redhat text-[#87635A]  font-normal text-[14px]'>@ ${product.price}</span></p>
                                    </div>
                                </div>
                                <span className='font-Redhat text-[#260F08] font-semibold text-[16px]'>${product.qty * product.price}</span>
                            </div>
                        )
                    })
                }

                {
                    <div className='py-[16px]'>
                        <p className=' flex  justify-between items-center ]'><span className='font-Redhat font-normal text-[14px] text-[#260F08] '>Order Total</span><span className='font-Redhat font-bold text-[24px] text-[#260F08] '>${cartProduct.reduce((total, item) => total + (item.price * item.qty), 0)}</span></p>

                    </div>

                }

            </div>
            <button className='bg-[#C73B0F]  text-white font-semibold text-[16px]   rounded-[999px] px-[24px] py-[16px] ' onClick={handleClick}>Start New Order</button>


        </div>
    )
}

export default ConfirmPage