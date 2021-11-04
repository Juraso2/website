import * as React from 'react'
import classNames from "classnames"
import parsePhoneNumber from "libphonenumber-js"

const Footer = ({
        location,
        phone,
        email,
        clause
    }) => {
    const phoneNumber = parsePhoneNumber(phone, 'PL')

    let contactClass = classNames(
        'cv-section_content uk-width-1-1 uk-width-1-2@m uk-padding-large uk-grid-margin uk-first-column', {
            'uk-padding-remove-bottom': clause
        }
    )

    return (
        <section className="uk-section-secondary uk-preserve-color"
            uk-scrollspy="cls: uk-animation-slide-bottom-small; target: .cv-animated-footer; delay: 100; repeat: false">
            <div className="uk-container uk-container-expand uk-padding-remove">
                <div className="uk-child-width-expand uk-grid uk-grid-collapse" uk-grid>
                    <div className="cv-section_header uk-grid-item-match uk-first-column uk-width-1-6 uk-visible@m">
                        <div></div>
                    </div>

                    <div
                        className="cv-section_header uk-width-1-1 uk-width-1-5@m uk-padding-large uk-text-right uk-first-column">
                        <h2 className="cv-section_heading uk-margin-small cv-animated-footer">Kontakt</h2>
                    </div>

                    <div className={contactClass}>
                        <div className="cv-contact uk-column-1-3@m cv-animated-footer">
                            {location && (
                                <div className="cv-contact_block">
                                    <h4>Lokalizacja</h4>
                                    <address>{location}</address>
                                </div>
                            )}

                            {phoneNumber && (
                                <div className="cv-contact_block">
                                    <h4>Telefon</h4>
                                    <p><a href={"tel:" + phone}>{phoneNumber.number}</a></p>
                                </div>
                            )}

                            {email && (
                                <div className="cv-contact_block">
                                    <h4>Email</h4>
                                    <a href={"mailto:" + email}>{email}</a>
                                </div>
                            )}
                        </div>

                        {clause && (
                            <>
                                <hr className="cv-animated-footer" />

                                <div
                                    className="cv-clause uk-padding uk-padding-remove-top uk-padding-remove-horizontal cv-animated-footer">
                                    <p className="cv-clause_content">{clause}</p>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="cv-section_content uk-grid-item-match uk-visible@m">
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer