<img class="santa" src="/images/file.png" alt="">

<style>
.santa{
  position: fixed;
  z-index: 100;
  height: 300px;
  width: 450px;
  animation: flyingsanta linear;
  animation-timeline: scroll();

}


@keyframes flyingsanta{
  0%{
    transform: translate(-100%, 50%);
    rotate: 5deg;
  }

  25%{
    translate: (70%, 50%);
    rotate: -5deg;
  }

  50%{
    rotate: 5deg;
  }

  75%{
    rotate: -5deg;
  }

  100%{
    transform: translate(400%, 50%);
    rotate: -15deg;
  }
}
</style>