import SimulationForm from '@/components/SimulationForm/SimulationForm'

export default {
  components: {
    SimulationForm
  },
  mounted () {
    this.getCountries().then(response => {
      this.countries = response
    })
  },
  data () {
    return {
      countries: [],
      formData: {
        country: '',
        document_type: '',
        document_number: '',
        fullname: '',
        email: '',
        amount: '',
        consignation_method: '',
        interest: '',
        term: ''
      },
      consignationMethod: [
        'Cheque',
        'Tranferencia'
      ],
      documentType: [
        'Cedula',
        'Pasaporte'
      ]
    }
  },
  computed: {
    interestValue () {
      switch (this.formData.consignation_method) {
        case 'Cheque':
          return '1.50 %'

        case 'Tranferencia':
          return '1.70 %'

        default:
          return ''
      }
    }
  },
  methods: {
    getCountries () {
      return this.axios.get('http://localhost:3002/get-countries')
        .then(response => response.data)
    },
    calculate () {
      const interestRate = this.interestValue.split(' ')[0] / 100
      const documentCode = this.documentType === 'Cedula' ? 'CC' : 'PAS'
      const creationDate = new Date()

      const Data = {
        ...this.formData,
        interest: interestRate,
        document_type: documentCode,
        creation_date: creationDate
      }

      this.axios.post('http://localhost:3002/simulate', Data)
    }
  }
}
