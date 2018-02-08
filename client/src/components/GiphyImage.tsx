import * as React from 'react';

interface GifyImageProps {
    name: string;
}

class GiphyImage extends React.Component<GifyImageProps, any> {
    constructor(props: GifyImageProps) {
        super(props);

        this.state = {
            giphyUrl: '',
            isLoading: false
        };
    }
    componentDidMount() {
        const giphyApi = '//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&q=';
        fetch(giphyApi + this.props.name)
            .then(response => response.json())
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({gipphyUrl: response.data[0].images.original.url});
                } else {
                    this.setState({gipphyUrl: '//media.giphy.com/media/YaOxRsmrv9IeA/giphy.gif'});
                }
                this.setState({isLoading: false});
            });
    }

    render() {
        const {giphyUrl, isLoading} = this.state;
        if (isLoading) {
            return <p>Loading image</p>;
        }
        return (
            <img src={giphyUrl} alt={this.props.name} width="200" />
        );
    }
}
export default GiphyImage;
