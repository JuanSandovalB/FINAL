

const Seccion2 =()=>{
    return(

        <>
   
   <div id="carouselExampleIndicators" class="carousel slide text-center">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active ">
      <img src="src/assets/images/imagen1.jpg" class="d-block mx-auto w-auto h-auto" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="src/assets/images/imagen4.jpg" class="d-block mx-auto w-auto h-auto" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="src/assets/images/imagen5.jpg" class="d-block mx-auto w-auto h-auto" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
    )
}
export default Seccion2;