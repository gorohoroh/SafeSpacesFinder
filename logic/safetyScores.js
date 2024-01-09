export const getApplicableScores = (scores, female, lgbt) => {
    const applicableScores = {
        medical: scores.medical,
        physicalHarm: scores.physicalHarm,
        politicalFreedom: scores.politicalFreedom,
        theft: scores.theft
    }
    if (female) applicableScores.female = scores.women;
    if (lgbt) applicableScores.lgbt = scores.lgbtq;
    return applicableScores;
};

export const getPersonalAverageSafetyScore = scores => {
    const totalScore = Object.values(scores).reduce((acc, current) => acc + current, 0);
    const numberOfScores = Object.entries(scores).length;
    const averageScore = Math.round(totalScore / numberOfScores * 100) / 100;
    return averageScore;
};

const getSafetyRanges = () => ({
    safe: {
        max: 1,
        min: 35
    },
    caution: {
        max: 35,
        min: 55
    },
    unsafe: {
        max: 55,
        min: 100
    }
});

const classifyScore = (score, isRisk = false) => {
    const ranges = getSafetyRanges()

    if (score <= ranges.safe.min) {
        return {
            resolution: "Safe to go",
            description: isRisk ? "low" : "high",
            colors: {
                background: "#42AB42FF",
                text: "#FFFFFF"
            }
        }
    } else if (score >= ranges.caution.max && score <= ranges.caution.min) {
        return {
            resolution: "Go with caution",
            description: "average",
            colors: {
                background: "#FF9900FF",
                text: "#FFFFFF"
            }
        }

    } else if (score >= ranges.unsafe.max) {
        return {
            resolution: "Stay away",
            description: isRisk ? "high" : "poor",
            colors: {
                background: "#E74545FF",
                text: "#FFFFFF"
            }
        }
    }
};

export const colorEncodeSafetyScore = score => classifyScore(score).colors;
export const getSafetyResolution = score => classifyScore(score).resolution;

export const getSubscoreSummary = scores => {
    return Object.entries(scores)
        .sort((a, b) => a[1] - b[1])
        .map(entry => {
            const category = entry[0];
            const score = entry[1];

            switch (true) {
                case category === "politicalFreedom":
                    return `Political freedom: ${(classifyScore(score).description)}`
                case category === "physicalHarm":
                    return `Risk of physical harm: ${(classifyScore(score, true).description)}`
                case category === "theft":
                    return `Risk of theft: ${(classifyScore(score, true).description)}`
                case category === "medical":
                    return `Medical environment: ${(classifyScore(score).description)}`
                case category === "lgbt":
                    return `Safety for LGBTQ: ${(classifyScore(score).description)}`
                case category === "female":
                    return `Safety for women: ${(classifyScore(score).description)}`
            }
        })
}
