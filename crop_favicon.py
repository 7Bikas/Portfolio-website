from PIL import Image, ImageOps, ImageDraw

def create_circular_favicon(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        
        # Create a circular mask
        mask = Image.new('L', img.size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0) + img.size, fill=255)
        
        # Apply mask
        output = ImageOps.fit(img, mask.size, centering=(0.5, 0.5))
        output.putalpha(mask)
        
        # Save
        output.save(output_path)
        print(f"Successfully created circular favicon at {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    create_circular_favicon("src/assets/profile.png", "public/profile-circle.png")
