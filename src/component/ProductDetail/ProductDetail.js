import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import './ProductDetail.css'
import { FaBox, FaCalendarCheck, FaCheck, FaCreditCard, FaDollarSign, FaPhone, FaPhoneAlt, FaRegHeart, FaShieldAlt, FaStar } from 'react-icons/fa';
import { RiBankLine, RiDiscountPercentLine } from 'react-icons/ri';
import { MdAddShoppingCart } from 'react-icons/md';
import { IoIosArrowDown, IoIosPhonePortrait } from 'react-icons/io';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { TiDropbox } from 'react-icons/ti';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { LuCalendarCheck } from 'react-icons/lu';
import { GoCheckCircleFill } from 'react-icons/go';

const ProductDetail = () => {
    return (
        <Container className='max-width' fluid>
            <Row>
                <Col xs={6} className='title'>IPhone 15 Pro Max 256GB | Genuine VN/A</Col>
                <Col xs={1}></Col>
                <Col xs={5} className='justify-content-between d-flex'>
                    <div style={{ "color": "#FFC107" }}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div>
                    <div>110 evaluated</div>
                    <div></div>
                    <div></div>
                </Col>
            </Row>
            <Row>
                <Col xs={7} className="d-flex flex-fill">
                    <div className='d-flex flex-column'>
                        <div className='img-detail flex-grow-1'>
                            <div style={{ "color": "red" }}><FaRegHeart /></div>
                            <div className='justify-content-between d-flex'>
                                <div className='m-2 img-container'><Image className='w-100 rounded' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png' /></div>
                                <div className='m-2 content-container'>
                                    <div className='title'><p>Outstanding features</p></div>
                                    <div className='content'>
                                        <ul>
                                            <li>- Frame design from aerospace standard titanium</li>
                                            <li>- Extremely light, durable with thin edges for comfortable grip</li>
                                            <li>- A17 chip brings extremely vivid graphics performance</li>
                                            <li>- Enjoy creating and filming professionally</li>
                                            <li>- Cluster of 3 rear cameras up to 48MP</li>
                                            <li>- New action buttons help quickly activate your favorite features</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='some-img d-flex m-2'>
                            <div><Image className='w-100 rounded' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png' /></div>
                            <div><Image className='w-100 rounded' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png' /></div>
                            <div><Image className='w-100 rounded' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png' /></div>
                            <div><Image className='w-100 rounded' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png' /></div>
                        </div>
                    </div>
                </Col>
                <Col xs={5}>
                    <div>
                        <div className='select-title title'>
                            Select machine configuration
                        </div>
                        <ul className='justify-content-between   d-flex flex-wrap'>
                            <li className='select-choice'>
                                <div><strong>1T</strong></div>
                                <div>42.690.000</div>
                            </li>
                            <li className='select-choice'>
                                <div><strong>512GB</strong></div>
                                <div>42.690.000</div>
                            </li>
                            <li className='select-choice'>
                                <div><strong>256GB</strong></div>
                                <div>42.690.000</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='select-title title'>
                            Choose color and see price
                        </div>
                        <ul className='justify-content-between d-flex flex-wrap'>
                            <li className='select-choice-price-color justify-content-between d-flex'>
                                <div className='img-container'><Image className='img-fluid rounded ' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png' /></div>
                                <div className='content-container'>
                                    <div><strong>Natural Titanium</strong></div>
                                    <div>42.690.000</div>
                                </div>
                            </li>
                            <li className='select-choice-price-color justify-content-between d-flex'>
                                <div className='img-container'><Image className='img-fluid rounded ' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png' /></div>
                                <div className='content-container'>
                                    <div><strong>Natural Titanium</strong></div>
                                    <div>42.690.000</div>
                                </div>
                            </li>
                            <li className='select-choice-price-color justify-content-between d-flex'>
                                <div className='img-container'><Image className='img-fluid rounded ' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png' /></div>
                                <div className='content-container'>
                                    <div><strong>Natural Titanium</strong></div>
                                    <div>42.690.000</div>
                                </div>
                            </li>
                            <li className='select-choice-price-color justify-content-between d-flex'>
                                <div className='img-container'><Image className='img-fluid rounded ' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png' /></div>
                                <div className='content-container'>
                                    <div><strong>Natural Titanium</strong></div>
                                    <div>42.690.000</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='discount d-flex justify-content-between mx-5'>
                        <div></div>
                        <div>
                            <RiDiscountPercentLine />
                        </div>
                        <div className='upcoming-discount'>
                            <div className='price'>27.490.000</div>
                            <div className='content'>When autumn is old</div>
                        </div>
                        <div className='discount-price'>
                            <div className='reduced'>29.490.000</div>
                            <div className='original '>34.990.000</div>
                        </div>
                        <div></div>
                    </div>
                    <Row className='buy-detail'>
                        <Col xs={8} className='buy'>
                            <div className='title'>Buy now</div>
                            <div className='detail'>( Fast delivery within 2h or pick up at the store )</div>
                        </Col>
                        <Col xs={3} className='cart'>
                            <div style={{ "color": "#A60A0A" }}><MdAddShoppingCart /></div>
                            <div>Cart</div>
                        </Col>
                    </Row>
                    <Row className='installment-detail'>
                        <Col xs={6} className='installment'>
                            <div className='content'>0% installment payment</div>
                            <div className='detail'>Prepay only with 10.449.000</div>
                        </Col>
                        <Col xs={5} className='visa-card'>
                            <div className='content'>Pay in 0% installments via card</div>
                            <div className='detail'>(No conversion fee 3-6 months)</div>
                        </Col>
                    </Row>
                    <Button className='trade-in-sale'>
                        <div>Old autumn - new life</div>
                        <div>( Just words 27.490.000 )</div>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <div class="product-info">
                        <h2>Discount when buying</h2>
                        <ul class="discount-list">
                            <li>
                                <IoShieldCheckmarkOutline />
                                Comprehensive product protection with extended warranty service.
                            </li>
                            <li>
                                <RiBankLine />
                                Discount up to 500k when paying with Vietcombank credit card.
                            </li>
                            <li>
                                <RiBankLine />
                                Discount up to 500k when paying with Home Credit credit card.
                            </li>
                        </ul>

                        <h2>Product information</h2>
                        <ul class="product-info-list">
                            <li>
                                <IoIosPhonePortrait />
                                100% new device, genuine Apple Vietnam. Always an authorized retailer of genuine iPhone VN/A of Apple Vietnam.
                            </li>
                            <li>
                                <TiDropbox />
                                Box, Instruction book, SIM card, Type C cable.
                            </li>
                            <li>
                                <AiOutlineDollarCircle />
                                1 FOR 1 EXCHANGE within 30 days if there is a manufacturer hardware defect. 12-month warranty at Apple's official warranty center.
                            </li>
                            <li>
                                <LuCalendarCheck />
                                Product price includes VAT.
                            </li>
                        </ul>
                    </div>
                    <div className="review-container">
                        <h4>iPhone 15 Pro Max 256GB review & review | Genuine VN/A</h4>
                        <div className="rating">
                            <div>5.0/5.0</div>
                            <div style={{ "color": "#FFC107" }}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div>
                            <div>110 evaluate</div>
                        </div>
                        <div className="filter">
                            <Button>5 <FaStar style={{ "color": "#FFC107" }} /></Button>
                            <Button>4 <FaStar style={{ "color": "#FFC107" }} /></Button>
                            <Button>3 <FaStar style={{ "color": "#FFC107" }} /></Button>
                            <Button>2 <FaStar style={{ "color": "#FFC107" }} /></Button>
                            <Button>1 <FaStar style={{ "color": "#FFC107" }} /></Button>
                        </div>
                        <div className="filter">
                            <Button>All</Button>
                            <Button>There are pictures</Button>
                        </div>
                        <div className="reviews">
                            <div className="review">
                                <Image className='img-fluid' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png' />
                                <div className='comment'>
                                    <div>Trương Tường Vi</div>
                                    <div className='d-flex star-rating'><GoCheckCircleFill style={{ "color": "green" }} />Purchased <div style={{ "color": "#FFC107" }}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div></div>
                                    <div className='comment-content'>Enthusiastic staff, good service.</div>
                                </div>
                            </div>
                            <div className="review">
                                <Image className='img-fluid' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png' />
                                <div className='comment'>
                                    <div>Trương Tường Vi</div>
                                    <div className='d-flex star-rating'><GoCheckCircleFill style={{ "color": "green" }} />Purchased <div style={{ "color": "#FFC107" }}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div></div>
                                    <div className='comment-content'>Enthusiastic staff, good service.</div>
                                </div>
                            </div>
                            <div className="review">
                                <Image className='img-fluid' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png' />
                                <div className='comment'>
                                    <div>Trương Tường Vi</div>
                                    <div className='d-flex star-rating'><GoCheckCircleFill style={{ "color": "green" }} />Purchased <div style={{ "color": "#FFC107" }}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div></div>
                                    <div className='comment-content'>Enthusiastic staff, good service.</div>
                                </div>
                            </div>
                        </div>
                        <div className="see-more"><Button variant='outline-secondary'>See more <IoIosArrowDown /></Button></div>
                        <div className="rate">
                            <h4>How do you rate this product?</h4>
                            <Button variant='outline-secondary'>Rate now</Button>
                        </div>
                    </div>
                </Col>
                <Col xs={6}>
                <div className="phone-specs">
                    <h2>Specifications</h2>
                    <ul>
                        <li><strong>Screen size:</strong> 6.7"</li>
                        <li><strong>Screen technology:</strong> Super Retina XDR OLED</li>
                    </ul>
                </div>
                </Col>
            </Row>
        </Container>
    )
}
export default ProductDetail;