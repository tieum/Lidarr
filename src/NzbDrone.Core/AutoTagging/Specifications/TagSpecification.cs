using FluentValidation;
using NzbDrone.Core.Annotations;
using NzbDrone.Core.Music;
using NzbDrone.Core.Validation;

namespace NzbDrone.Core.AutoTagging.Specifications
{
    public class TagSpecificationValidator : AbstractValidator<TagSpecification>
    {
        public TagSpecificationValidator()
        {
            RuleFor(c => c.Value).GreaterThan(0);
        }
    }

    public class TagSpecification : AutoTaggingSpecificationBase
    {
        private static readonly TagSpecificationValidator Validator = new ();

        public override int Order => 1;
        public override string ImplementationName => "Tag";

        [FieldDefinition(1, Label = "AutoTaggingSpecificationTag", Type = FieldType.ArtistTag)]
        public int Value { get; set; }

        protected override bool IsSatisfiedByWithoutNegate(Artist artist)
        {
            return artist.Tags.Contains(Value);
        }

        public override NzbDroneValidationResult Validate()
        {
            return new NzbDroneValidationResult(Validator.Validate(this));
        }
    }
}
