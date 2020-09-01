import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Header from "../../header/header"
import Gravatar from 'react-awesome-gravatar';
import Flag from 'react-world-flags';

 class PubliFigureDetail extends Component {

    state={
        client:{},
    }

    componentDidMount(){

       // console.log(this.props.history)
        this.setState({
            client:this.props.location.state
        })
    }


    render() {
         console.log(this.state.client);
         //   size:40,
         //   default:"identicon"
         // }} email={this.state.client.email}>
         //options={{
         // <Gravatar email={this.state.client.email}
         // { url => (<img className="gravatar__img" src={url} />) }
         // </Gravatar>
        return (<>
             <Header />
            <div className = "clientDetailViewWrapper" >
                <div className = "clientDetailView">
                  <div className="clientDetailView__row">
                      <div className = "clientDetailView__col clientDetailView__col-1">
                          <div className = "clientDetailView__name">{this.state.client.firstName+" "+this.state.client.lastName}</div>
                          <div className="clientDetailView__notableFor">Notable as <span>{this.state.client.publicFigure==="PF1"?"Public Figure":"Scientist"}</span></div>
                          <div className="clientDetailView__verified">{this.state.client.verified?<span><i class="fa fa-check" aria-hidden="true"></i> verified</span>:null}</div>
                      </div>
                      <div className="clientDetailView__col clientDetailView__col-2">
                            <div className className="clientDetailView__col-country"><span>{this.state.client.country}</span></div>
                           <Flag  code={this.state.client.code} height={25}/>
                      </div>
                      <div className="clientDetailView__col clientDetailView__col-3">
                      <Gravatar email="anujbhatt023@gmail.com" options={ {
                        default:"identicon",
                        size:120,
                      } }>
                            { url => (<img className="gravatar__img clientDetailView__img" src={url} />) }
                      </Gravatar>
                      </div>
                  </div>

                    <hr  className="hr"/>
                    <div className="clientDetailView__background">
                        {this.state.client.background}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla laudantium tempore repellendus, cupiditate quaerat tenetur error quia doloremque molestias placeat fugit, consectetur rerum sit adipisci aspernatur provident ipsa odit, incidunt itaque. Quod facere, quia, ea, vel quis magnam, harum cum architecto ab aut ipsam? Quia vitae, dignissimos delectus amet nemo officiis id, sequi harum labore sed quaerat atque ullam dicta cumque illo tempora repudiandae illum velit vero numquam? Tenetur, iste placeat pariatur, veniam dolor molestias asperiores aliquam porro nobis vitae nihil eveniet praesentium excepturi sequi nostrum. Rerum doloribus, esse! Tenetur saepe, obcaecati iusto expedita iure minima ullam quos sunt culpa, enim aspernatur iste animi. Repellat pariatur commodi similique error, laboriosam recusandae omnis ratione eius reiciendis quia ipsum, dolores quos perspiciatis sint rerum. Ut culpa quasi minus, praesentium inventore officia ex, facere repellendus quaerat, vel eius laboriosam nesciunt tenetur itaque. Voluptate ratione a ducimus tenetur neque necessitatibus minus dicta voluptas labore ab doloribus excepturi ut, sapiente adipisci facilis repudiandae, non totam asperiores. Illo deleniti culpa nostrum placeat expedita incidunt nam a quos magnam et dolorum voluptates ducimus velit consectetur, similique officiis ipsa iure dignissimos nobis vitae animi consequatur maxime architecto, impedit. Adipisci distinctio nostrum, iure saepe deserunt unde dolorem perspiciatis eius ratione quod reiciendis expedita officiis ex numquam nihil labore explicabo voluptatum tenetur quos maxime aliquid. Nemo explicabo, corporis harum quaerat delectus a recusandae dolorem laudantium mollitia autem sit exercitationem est possimus eum dicta, repudiandae voluptas, temporibus iusto magnam. Sit, necessitatibus, optio. Officiis soluta consectetur perferendis voluptatem, voluptas optio architecto assumenda laborum suscipit earum impedit corrupti distinctio veritatis numquam, praesentium quod quisquam. A eligendi error aut quos, quibusdam dignissimos fugit illum repellat deleniti? Aspernatur labore in neque repellendus tempora officia sit laudantium autem facere dicta iste tempore cumque, tenetur saepe molestias, aut voluptatum impedit minus ad similique! Architecto magnam fugiat harum molestias, pariatur perspiciatis illo consequatur vitae, adipisci excepturi eveniet error laborum rerum laboriosam quo blanditiis deleniti, quos saepe ratione modi soluta, quam explicabo. Repudiandae impedit nesciunt ab laboriosam in at blanditiis cumque amet dicta delectus! Voluptatem amet nesciunt quidem beatae quo id aspernatur quibusdam aliquam obcaecati nulla commodi illum temporibus rerum accusantium quaerat hic illo voluptas in, dolorum! Ad facilis quod dolor. Iusto dolores architecto reprehenderit consequatur, harum deserunt quae incidunt laboriosam. Blanditiis vitae porro, earum. Dicta error harum ducimus suscipit, deserunt, iusto autem optio reiciendis eaque obcaecati esse ipsa quibusdam ut mollitia voluptatibus doloribus, facere sit ipsum ex. Voluptatibus sequi explicabo reprehenderit debitis incidunt dolorem, voluptatem facere quo. Sed, atque dolores, veritatis voluptas itaque porro veniam, id modi sint ullam aut mollitia illum facilis harum! Quod recusandae facere necessitatibus soluta quas illo praesentium tempora in eos tempore, saepe dolore similique, vero eveniet dolor, iste dignissimos labore distinctio quisquam qui repudiandae, delectus laborum quam! Labore enim cupiditate itaque sunt recusandae soluta accusamus rerum totam aliquid, doloremque quod at illum molestiae voluptatibus, reprehenderit illo quos ipsum eveniet doloribus libero? Velit totam eius consectetur porro ullam, quos qui eveniet quae quidem deleniti tempore facilis omnis mollitia temporibus officiis, voluptatibus, excepturi nemo voluptatem.
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default withRouter(PubliFigureDetail)
