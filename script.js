function verifyCertificate() {

    const statusBox =
        document.getElementById("verificationStatus");

    statusBox.innerHTML = `

        <h2>
            ✓ Verification Status
        </h2>

        <div class="status-box">

            <div class="status-icon">
                ✓
            </div>

            <div>

                <h3>
                    Certificate Verified
                </h3>

                <p>
                    The certificate information shown
                    above is available for this demo
                    verification page.
                </p>

            </div>

        </div>

    `;

    statusBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}