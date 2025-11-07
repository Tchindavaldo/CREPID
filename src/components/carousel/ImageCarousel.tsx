import { useState, useEffect, useRef } from 'react';
// @mui
import { Box, IconButton, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Carousel, { CarouselArrows } from 'src/components/carousel';

// ----------------------------------------------------------------------

const StyledCarousel = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .slick-list': {
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
  },
}));

const StyledArrow = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  zIndex: 9,
  top: '50%',
  transform: 'translateY(-50%)',
  color: theme.palette.common.white,
  backgroundColor: alpha(theme.palette.common.black, 0.48),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.72),
  },
  width: 40,
  height: 40,
}));

// ----------------------------------------------------------------------

type Props = {
  images: string[];
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  imageOrigin?: 'hero' | 'default';
};

export default function ImageCarousel({
  images,
  autoPlay = true,
  autoPlaySpeed = 3000,
  imageOrigin = 'default',
}: Props) {
  const carouselRef = useRef<Carousel | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselSettings = {
    dots: false,
    arrows: false,
    autoplay: autoPlay,
    autoplaySpeed: autoPlaySpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  if (!images || images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <Image
        alt="Domain image"
        src={images[0]}
        ratio="3/4"
        sx={{
          borderRadius: 2,
        }}
        origin={imageOrigin}
      />
    );
  }

  return (
    <StyledCarousel>
      <Carousel ref={carouselRef} {...carouselSettings}>
        {images.map((image, index) => (
          <Box key={index}>
            <Image
              alt={`Domain image ${index + 1}`}
              src={image}
              ratio="3/4"
              sx={{
                borderRadius: 2,
                objectFit: 'cover',
              }}
              origin={imageOrigin}
            />
          </Box>
        ))}
      </Carousel>

      {images.length > 1 && (
        <>
          {/* Dots indicator only - no arrows to avoid confusion with main carousel */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
              zIndex: 10,
            }}
          >
            {images.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: index === currentIndex ? 'common.white' : alpha('#fff', 0.48),
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onClick={() => carouselRef.current?.slickGoTo(index)}
              />
            ))}
          </Box>
        </>
      )}
    </StyledCarousel>
  );
}
