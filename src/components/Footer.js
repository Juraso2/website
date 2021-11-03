import * as React from 'react'
import parsePhoneNumber from "libphonenumber-js"

const Footer = ({ location, phone, email }) => {
    const phoneNumber = parsePhoneNumber(phone, 'PL')

    return (
        <section class="uk-section-secondary uk-preserve-color"
            uk-scrollspy="cls: uk-animation-slide-bottom-small; target: .cv-animated-footer; delay: 100; repeat: false">
            <div class="uk-container uk-container-expand uk-padding-remove">
                <div class="uk-child-width-expand uk-grid uk-grid-collapse" uk-grid>
                    <div class="cv-section_header uk-grid-item-match uk-first-column uk-width-1-6 uk-visible@m">
                        <div></div>
                    </div>

                    <div
                        class="cv-section_header uk-width-1-1 uk-width-1-5@m uk-padding-large uk-text-right uk-first-column">
                        <h2 class="cv-section_heading uk-margin-small cv-animated-footer">Kontakt</h2>
                    </div>

                    <div
                        class="cv-section_content uk-width-1-1 uk-width-1-2@m uk-padding-large uk-grid-margin uk-first-column uk-padding-remove-bottom">
                        <div class="cv-contact uk-column-1-3@m cv-animated-footer">
                            {location && (
                                <div class="cv-contact_block">
                                    <h4>Lokalizacja</h4>
                                    <address>{location}</address>
                                </div>
                            )}

                            {phoneNumber && (
                                <div class="cv-contact_block">
                                    <h4>Telefon</h4>
                                    <p><a href={"tel:" + phone}>{phoneNumber.number}</a></p>
                                </div>
                            )}

                            {email && (
                                <div class="cv-contact_block">
                                    <h4>Email</h4>
                                    <a href={"mailto:" + email}>{email}</a>
                                </div>
                            )}
                        </div>

                        <hr class="cv-animated-footer" />

                        <div
                            class="cv-clause uk-padding uk-padding-remove-top uk-padding-remove-horizontal cv-animated-footer">
                            <p class="cv-clause_content">Wyrażam zgodę na przetwarzanie moich danych osobowych przez ROCKON
                            SP. Z O.O. dla potrzeb niezbędnych do realizacji procesu tej oraz przyszłych rekrutacji
                            (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018,
                            poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z
                            dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
                            osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
                            (RODO)).</p>
                        </div>
                    </div>

                    <div class="cv-section_content uk-grid-item-match  uk-visible@m">
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer