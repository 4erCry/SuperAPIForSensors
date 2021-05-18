import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Time from 'util/time'

export default class TimeZonePicker extends React.Component {
    state = {
        time: new Date(),
        offset: -(new Date().getTimezoneOffset() / 60),
    }

    componentDidMount() {
        this.props.setOffset(this.state.offset)
    }

    handleChange = (event) => {
        const d = new Date()
        d.setTime(
            d.getTime() +
            d.getTimezoneOffset() * 60 * 1000 +
            event.target.value * 3600 * 1000,
        )
        this.setState({
            time: d,
            offset: event.target.value,
        })
        this.props.setOffset(event.target.value)
    }

    render() {
        const timezones = []
        for (let i = -12; i <= 14; i++) {
            timezones.push(
                <MenuItem key={i} value={i}>
                    {i > 0 ? '+' : null}
                    {i}
                </MenuItem>,
            )
        }

        return (
            <React.Fragment>
                <Grid container justify="space-between">
                    <div>
                        <Typography>Current time</Typography>
                        <Typography variant="h6" gutterBottom>
                            {Time.formatTime(this.state.time)}
                        </Typography>
                    </div>
                    <div>
                        <Typography>Set timezone</Typography>
                        <Select value={this.state.offset} onChange={this.handleChange}>
                            {timezones}
                        </Select>
                    </div>
                </Grid>
            </React.Fragment>
        )
    }
}