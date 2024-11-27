<div class="loader">
  <p>loading</p>
</div>

<style>
  p {
    display: none;
  }

  .loader {
    margin: auto;
    width: inherit;
    aspect-ratio: 1;
    border-radius: 50%;
    animation: l5 1s infinite linear alternate;
  }
  
  @keyframes l5 {
    0%  {box-shadow: 20px 0 #fff, -20px 0 #fff2; background: #fff }
    33% {box-shadow: 20px 0 #fff, -20px 0 #fff2; background: #fff2}
    66% {box-shadow: 20px 0 #fff2, -20px 0 #fff; background: #fff2}
    100% {box-shadow: 20px 0 #fff2, -20px 0 #fff; background: #fff }
  }
</style>