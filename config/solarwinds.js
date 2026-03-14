const sendToSolarWinds = async(logEntry) => {

    const token = process.env.SOLARWINDS_TOKEN;

    // If no token, skip sending logs
    if (!token) {
        return;
    }

    try {

        await fetch("https://api.solarwinds.com/v1/logs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(logEntry)
        });

    } catch (error) {

        console.error("SolarWinds logging failed:", error.message);

    }
};

module.exports = sendToSolarWinds;