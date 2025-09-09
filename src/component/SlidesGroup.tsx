import React from "react";
import { Box, CardMedia, CardContent, Typography } from "@mui/material";
import Slides from "./Slides";
import { topVenues, topSales, topAbroad, topNews } from "../data/MockData";

/**
 * SlidesGroup: ví dụ dùng Slides như 1 khuôn, map qua các list trong MockData
 * Mỗi phần sẽ có title khác nhau, và có thể truyền renderItem nếu cần.
 */
const SlidesGroup: React.FC = () => {
  // cấu hình các section: title, data, itemWidth, (tùy chọn) renderItem
  const sections = [
    {
      key: "venues",
      title: "Top địa điểm hút khách",
      data: topVenues,
      itemWidth: 300,
      // ở đây không truyền renderItem -> sẽ dùng defaultRender trong Slides
    },
    {
      key: "sales",
      title: "Khuyến mãi hot",
      data: topSales,
      itemWidth: 260,
      // custom render cho sale (hiển thị percent rõ ràng)
      renderItem: (item: any) => (
        <>
          <CardMedia
            component="img"
            image={item.img}
            alt={item.name}
            sx={{
              height: { xs: 140, sm: 150, md: 170 },
              objectFit: "cover",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          />
          <CardContent sx={{ pt: 1, pb: 2, px: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Giảm giá: <strong>{item.percent}</strong>
            </Typography>
          </CardContent>
        </>
      ),
    },
    {
      key: "abroad",
      title: "Top điểm đến nước ngoài",
      data: topAbroad,
      itemWidth: 300,
      // dùng mặc định (tên/ảnh/view)
    },
    {
      key: "news",
      title: "Top tin tức!!!",
      data: topNews,
      itemWidth: 300,
    },
  ];

  return (
    <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", px: 2 }}>
      {sections.map((s) => (
        <Slides
          key={s.key}
          title={s.title}
          data={s.data}
          itemWidth={s.itemWidth}
          containerWidth={1200}
          // @ts-ignore - renderItem chỉ tồn tại trong 1 số section, hợp lý để truyền tuỳ biến
          renderItem={s.renderItem}
        />
      ))}
    </Box>
  );
};

export default SlidesGroup;
