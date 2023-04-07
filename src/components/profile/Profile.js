import { useCallback, useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import centerImage from '../../assets/center.jpg';
import leftOne from '../../assets/left_1.jpg'
import leftTwo from '../../assets/left_2.jpg'
import rightOne from '../../assets/right_1.jpg'
import rightTwo from '../../assets/right_2.jpg'

import "./Profile.scss"

const Profile = ({ onclick }) => {
    const { isProfileImageRight } = useSelector(state => state.app);
    const [activeImage, setActiveImage] = useState(3);
    const imageContainer = useRef(null)

    const handleMouseMove = (e) => {
        const windowWidth = window.innerWidth;
        const baseWidth = Math.round(windowWidth / 5);
        const mouseXPos = e.clientX;
    
        if (mouseXPos > baseWidth * 4) setActiveImage(1)
        if (mouseXPos < baseWidth * 4) setActiveImage(2)
        if (mouseXPos < baseWidth * 3) setActiveImage(3)
        if (mouseXPos < baseWidth * 2) setActiveImage(4)
        if (mouseXPos < baseWidth) setActiveImage(5)
    }

    useEffect(() => {
        window.addEventListener('mousemove', (e) => handleMouseMove(e));
    }, [])

    return (
        <div className='profile-container'>
            <div className="profile-info-container p-4">
                <h1 className="title">Info title</h1>
                <p className='txt-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, veniam. Consequuntur eum eveniet veritatis! Fuga veritatis quibusdam atque maxime voluptates ad, illum hic. Amet, culpa eos omnis fugit placeat modi voluptas corrupti numquam maxime autem illo iusto, doloribus perferendis, quaerat quibusdam itaque minima atque dolorum? Eaque ex dolores facere facilis, ut perspiciatis sint reiciendis totam aliquam voluptates ducimus mollitia soluta deserunt quos ipsum culpa quia. Placeat numquam enim rerum quam repellat perferendis, magni sit. Delectus deserunt quae cum eum et quas nemo dignissimos deleniti quis iusto? Doloremque rerum, laboriosam totam modi nemo nihil a, accusamus possimus id dolores provident quod.</p>
                <p className="txt-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt expedita ullam hic magnam error nemo aperiam similique eos, quo doloribus illo perferendis unde veniam voluptas, nulla qui tempora harum a dolorum beatae consequatur praesentium eveniet autem. Doloribus, voluptatum excepturi dicta odit dolorum accusamus perspiciatis quas placeat sunt maiores iste dignissimos?</p>
                <p className="txt-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam ab repellendus quidem odio officia quam, delectus aliquid maiores iusto, assumenda autem nostrum ipsum optio quaerat ducimus perspiciatis placeat ipsa! Unde deserunt eos blanditiis recusandae officiis aspernatur commodi vel a!</p>
                <p className="txt-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, mollitia beatae ut inventore odit earum nisi fuga cupiditate sunt error corrupti harum dolorem id dicta dolore. Provident doloribus tempora quod commodi corporis, iusto, neque eius ducimus libero officia reiciendis porro ipsam, accusantium dolore odio excepturi velit exercitationem ab. Eveniet dolor fuga, nam pariatur harum atque minima distinctio nemo ullam facere quasi hic itaque animi enim illo, tempore eius ab. Iste odit dolorem alias error eos, beatae mollitia reprehenderit ducimus culpa. Quidem adipisci iure laboriosam autem aut id temporibus voluptatibus obcaecati necessitatibus illum sunt quis excepturi fugit, nobis quasi minima dolor.</p>
            </div>

            <div
                onClick={onclick} 
                ref={imageContainer}
                className="profile-image-container h-100 w-100">
                <img className={classNames({
                    'profile-image': true,
                    'js-active-image': activeImage === 5
                })} src={leftTwo} alt="" />
                <img className={classNames({
                    'profile-image': true,
                    'js-active-image': activeImage === 4
                })} src={leftOne} alt="" />
                 <img className={classNames({
                    'profile-image': true,
                    'js-active-image': activeImage === 3
                })} src={centerImage} alt="" />
                 <img className={classNames({
                    'profile-image': true,
                    'js-active-image': activeImage === 2
                })} src={rightOne} alt="" />
                <img className={classNames({
                    'profile-image': true,
                    'js-active-image': activeImage === 1
                })} src={rightTwo} alt="" />

                { isProfileImageRight ? <span className='navigator uppercase'>About &rarr;</span> : <span className='navigator uppercase'>&larr; Back</span>}
            </div>
        </div>
    )
}

export default Profile;