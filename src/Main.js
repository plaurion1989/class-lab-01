import React from 'react';
import HornedBeast from './HornedBeast';
import { CardColumns, Form , Card} from 'react-bootstrap';



class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      showModal: false,
      searchHorn: 0
    }
    this.componentDidMount = () => {
      this.setState({
        data: this.props.importData
      })
    }
  }
  filterData = () => {
    const filterBeasts = (beast) => {
      if (beast.horns === this.state.searchHorn) {
        return true;
      }
      return false;
    }

    if (this.state.searchHorn) {
      this.setState({ data: this.state.data.filter(filterBeasts) });
    } else {
      this.setState({ data: this.state.data });
    }
  }

  handleHorns = (e) => {
    let searchValue = parseInt(e.target.value);
    this.setState({ searchHorn: searchValue }, this.filterData);
  }
  render() {
    return (
      <>
        <Card style={{width:500}}>
        <Form>
          <Form.Label>Search By Horns</Form.Label>
          <Form.Control onChange={this.handleHorns}as="select">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>100</option>
          </Form.Control>
        </Form>
        </Card>
        <CardColumns>
          {this.state.data.map(beast => {
            return <HornedBeast
              src={beast.image_url}
              title={beast.title}
              alt={beast.keyword}
              description={beast.description}
              showModal={this.state.showModal}
            />
          })}
        </CardColumns>
      </>
    )
  }
}

export default Main;