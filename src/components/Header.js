import * as React from "react"
import parsePhoneNumber from "libphonenumber-js"

const Header = ({ location, phone, email, name, surname, title }) => {
    const phoneNumber = parsePhoneNumber(phone, 'PL')

    return (
        <section className="uk-section uk-section-secondary uk-padding-remove-vertical uk-preserve-color"
            uk-scrollspy="cls: uk-animation-slide-bottom-small; target: .cv-animated-header; delay: 200; repeat: false">
            <div className="uk-container">
                <div className="uk-flex uk-flex-column uk-flex-center uk-position-relative cv-header_viewport">
                    <div className="cv-brand">
                        <h1 className="cv-brand_title cv-animated-header">
                            <span className="cv-brand_first-word uk-display-block">{name}</span>
                            <span className="cv-brand_second-word uk-display-block uk-text-uppercase cv-animated-header">{surname}</span>
                        </h1>
                        <h2 className="cv-brand_sub-title uk-text-large uk-text-light uk-margin-small-top cv-animated-header">{title}</h2>
                    </div>

                    <div className="uk-width-1-1 cv-contact cv-header_contact cv-animated-header">
                        <hr />

                        <div className="uk-column-1-3@s uk-text-center uk-text-left@m">
                            {location && (
                                <div className="cv-contact_block uk-margin-bottom">
                                    <h4 className="uk-margin-small-bottom">Lokalizacja</h4>
                                    <address className="uk-margin-remove-vertical">{location}</address>
                                </div>
                            )}

                            {phoneNumber && (
                                <div className="cv-contact_block uk-margin-bottom">
                                    <h4 className="uk-margin-small-bottom">Telefon</h4>
                                    <p className="uk-margin-remove-vertical">
                                        <a href={"tel:" + phone}>{phoneNumber.number}</a>
                                    </p>
                                </div>
                            )}

                            {email && (
                                <div className="cv-contact_block uk-margin-bottom">
                                    <h4 className="uk-margin-small-bottom">Email</h4>
                                    <a href={"mailto:" + email}
                                        className="uk-margin-remove-vertical">{email}</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header