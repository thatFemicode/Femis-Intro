import { Power3, Power4, gsap } from "gsap";
const HomeAnimation = (
  node1,
  node2,
  node3,
  node4,
  node5,
  node6,
  node7,
  node8,
  node9
) => {
  let tl = gsap.timeline();
  tl.to(node1, {
    duration: 1,
    height: "100%",
    left: "0%",
    ease: Power3.easeInOut,
  })
    .to(node2, {
      duration: 0.1,
      ease: Power3.easeInOut,
      opacity: 1,
    })
    .fromTo(
      node3,
      {
        duration: 0.2,
        scale: 0.5,
        opacity: 0,
        fillOpacity: 0,
        strokeDashoffset: 1500,
        ease: Power3.easeInOut,
      },
      {
        duration: 1,
        opacity: 1,
        scale: 0.7,
        strokeDashoffset: 0,
        transformOrigin: "50%, 50%",
        fillOpacity: 1,
        ease: Power3.easeInOut,
      }
    )
    .to(node3, {
      duration: 0.7,
      left: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    })
    .to(node1, { bottom: "100%", duration: 2 })
    .from(node4, {
      duration: 0.3,
      opacity: 0,
      pointerEvents: "auto",
      ease: Power4.easeInOut,
    })
    .to(node4, {
      duration: 0.3,
      opacity: 1,
      pointerEvents: "auto",
      ease: Power4.easeInOut,
    })
    .from(node5, {
      opacity: 0,
      y: 100,
      duration: 1,
    })
    .from(node6, {
      duration: 1,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
    })
    .from(node7, {
      duration: 1,
      width: "100%",
      y: 20,
      skewX: 20,
      autoAlpha: 0,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
    })
    .from([node8, node9], {
      opacity: 0,
      // y: 40,
      duration: 2,
      scale: 1.4,
      ease: "power2.out",
      stagger: {
        amount: 1,
      },
    });
};
export default HomeAnimation;
