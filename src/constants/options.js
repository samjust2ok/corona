import Option from '../components/Option';

export default {
        symptomsSeverity: [
            {
                title: 'Asymptomatic (None)',
                value: 'none'
            },
            {
                title: 'Mild',
                value: 'mild'
            },
            {
                title: 'Severe',
                value: 'severe'
            },
            {
                title: 'Critical',
                value: 'critical'
            }
        ],
        yesNo: [
            {
                title: 'Yes',
                value: true
            },
            {
                title: 'No',
                value:false
            },
        ],
        yesNoNotSure:[
            {
                title: 'Yes',
                value: true
            },
            {
                title: 'No',
                value:false
            },
            {
                title: 'Not Sure',
                value: 'not sure'
            }
        ],
        hearDisease: [
            {
                title: 'Yes',
                desc: 'I currently visit the hos for the treatment of a heart disease',
                value:true,
            },
            {
                title: 'No',
                value:false
            }
        ],
        diseaseType: [
            {
                title: 'Diabetic',
                value: 'diabetic'
            },
            {
                title: 'Hypertensive',
                value: 'hypertensive'
            },
            {
                title: 'Asthmatic',
                value: 'asthmatic'
            },
            {
                title: 'None',
                value: 'none'
            }
        ],
        hasCough: [
            {
                title: 'Yes',
                desc: 'I often feel cold, with high temperature',
                value:true,
            },
            {
                title: 'No',
                desc: 'I feel normal',
                value:false
            }
        ],
        complimentFever: {
            label: 'How would you rate your fever',
            options: [
                {
                    title: 'High',
                    value: 'high'
                },
                {
                    title: 'Low',
                    value: 'low'
                },
                {
                    title: 'Intermittent',
                    value: 'intermittent'
                }
            ],
            component: Option
        },
        complimentCough: {
            label: 'Is your Cough productive of Sputum or Dry',
            options: [
                {
                    title: 'Sputum',
                    value: 'sputum'
                },
                {
                    title: 'Dry',
                    value: 'dry'
                },
            ],
            component: Option
        },
        difficultyBreathing:[
            {
                title: 'Yes',
                desc: 'I find it very difficult to breathe properly, or I sometimes find myself breathing faster than normal',
                value: true
            },
            {
                title: 'No',
                desc: 'My breathing is normal',
                value: false
            }
        ]               
}


