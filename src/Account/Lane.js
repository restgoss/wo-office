export default function Lane(props) {
    return(
        <div className='lane'>
            {(props.imageSrc ? <img className='block-img' src={props.imageSrc}  alt='' /> : '')}
            <div className='text-block'>
                <p className='paragraph comment'>{props.firstParagraph}</p>
                <p className='paragraph comment'>{props.secondParagraph}</p>
            </div>
        </div>
    )
}