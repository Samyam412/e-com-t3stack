const mockUrl = [
  "https://utfs.io/f/a9d21af8-c8c7-4e6a-bde5-485f9bac3a2e-1d.1.jpg",
  "https://utfs.io/f/c892e108-492e-4d00-bc4f-a668116a6a08-1f.jpg",
  "https://utfs.io/f/8378a3d3-48b5-49a3-b636-0f5fba054bd8-1g.jpg",
  "https://utfs.io/f/e89dc87d-0895-40cd-96b5-73882912c5a5-1e.jpg",
];

const mockImages = mockUrl.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4  ">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
