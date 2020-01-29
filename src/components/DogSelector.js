import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { getDogTypes } from "../actions/dogActions";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Save from "@material-ui/icons/Save";

const mapStateToProps = state => ({
  dogTypes: state.dogState.dogTypes
});

const mapDispatchToProps = dispatch => ({
  getTypes: () => dispatch(getDogTypes())
});

class DogSelector extends React.Component {
  static defaultProps = {
    pets: [{ value: 0, label: "hola" }]
  };

  state = {
    data: {
      selectorValue: "BTC"
    }
  };

  componentDidMount = () => {
    console.log("pido datos");
    //this.props.getTypes();
  };

  buildOptions = options =>
    options.map(option => {
      const { label, value } = option;

      return (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      );
    });

  handleChange = event => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ data: { selectorValue: value } });
  };

  handleSave = event => {
    event.preventDefault();
    const { selectorValue } = this.state.data;
    this.props.setType(selectorValue);
  };

  render = () => {
    const { dogTypes } = this.props;
    const { selectorValue } = this.state.data;

    return (
      <div>
        <TextField
          id={"combo-pets"}
          select
          label={"Selector de animales"}
          fullWidth
          onChange={this.handleChange}
          value={selectorValue}
        >
          {this.buildOptions(dogTypes)}
        </TextField>
        <CardActions>
          <IconButton id={"communicationFormSave"} onClick={this.handleSave}>
            <Save />
          </IconButton>
        </CardActions>
      </div>
    );
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(DogSelector);
